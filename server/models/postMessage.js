import mongoose from 'mongoose';

//First, have to create mongoose schema.

const postSchema = mongoose.Schema({
	title: String,
	message: String,
	name: String, 
	creator: String,
	tags: [String], //태그는 배열로 묶는다 
	selectedFile: String,
	likes: {
		type: [String],
		default: [],
	},
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;