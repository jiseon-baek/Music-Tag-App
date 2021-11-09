import express from 'express';
import mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router = express.Router();

const { ObjectId } = mongoose.Types;

export const checkObjectId = (req, res, next) => {
	const { id: _id } = req.params;
	if(!ObjectId.isValid(id)) return res.status(404).send(`Id가 일치하지 않습니다.`);
	return next();
}

export const getPost = async (req, res) => { 
	const { id } = req.params;
    
	try {
	    const post = await PostMessage.findById(id);
	    
	    res.status(200).json(post);
	} catch (error) {
	    res.status(404).json({ message: error.message });
	}
    }
    

export const getPosts = async (req, res) => {
	const { page } = req.query;
	
	try {
		const LIMIT = 6;
		const startIndex = (Number(page) - 1) * LIMIT;
		const total = await PostMessage.countDocuments({});
		const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

		res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)} );
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}

export const getPostsBySearch = async (req, res) => {
	const { searchQuery, tags } = req.query;
    
	try {
	    const title = new RegExp(searchQuery, "i");
    
	    const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});
    
	    res.json({ data: posts });
	} catch (error) {
	    res.status(404).json({ message: error.message });
	}
    }

export const createPost = async (req, res) => {
	const post = req.body;
	const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
	try {
		await newPostMessage.save();
		res.status(201).json(newPostMessage);
		
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
}

export const updatePost = async(req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	//if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Id와 일치하는 Post가 없습니다.`);
	checkObjectId();

	const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true }); //세가지 파라미터를 넣어주어야 한다. findByIdAndUpdate(id, 업데이트 내용, 업데이트의 옵션)
	
	res.json(updatedPost);
}

export const deletePost = async (req, res) => {
	const { id } = req.params;
    
	//if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
	checkObjectId();
	await PostMessage.findByIdAndRemove(id);
    
	res.json({ message: "Post deleted successfully." });
    }


export const likePost = async (req, res) => {
	const { id } = req.params;

	if(!req.userId) return res.json({ message: 'Unauthenticated' });

	//if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
	checkObjectId();

	const post = await PostMessage.findById(id);

	const index = post.likes.findIndex((id) => id === String(req.userId));

	if(index === -1) {
		//포스트에 좋아요를 하고 싶다면
		post.likes.push(req.userId);

	} else {
		//좋아요 취소 하고 싶다면

		post.likes = post.likes.filter((id) => id !== String(req.userId));

	}

	const updatePost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

	res.json(updatePost);
}

export default router;