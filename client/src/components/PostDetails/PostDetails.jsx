import React, { useEffect } from 'react';
import { Paper, CircularProgress, Typography, Divider, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import useStyles from './styles';

import { getPost, getPostsBySearch } from '../../actions/posts';

const PostDetails = () => {
	const { post, posts, isLoading } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();
	const classes = useStyles();

	useEffect(() => {
		dispatch(getPost(id));
	}, [id]);

	useEffect(() => {
		if(post) {
			dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',')}));
		}
	}, [post]);

	if(!post) return null;
	
	if(isLoading) return (
		<Paper elevation={6} className={classes.loadingPaper}>
			<CircularProgress color="secondary" size="7em" />
		</Paper>
	)

	const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

	const openPost = (_id) => history.push(`/posts/${_id}`);

	return (
		<Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
            <div className={classes.section}>
            <Typography variant="h3" component="h2" style={{ fontfamily: 'Helvetica', margin: '20px 0'}}>🎧 {post.title}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" style={{ fontSize: '19px'}} component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            <Typography gutterBottom variant="body1" component="p" style={{ fontFamily: 'gill sans'}}>{post.message}</Typography>
            <Typography variant="h6" style={{ fontFamily: 'gill sans'}}>Created by: {post.name}</Typography>
            <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            <Divider style={{ margin: '40px 0' }} />
                <Button variant="outlined" color="secondary" className={classes.linkButton} interactive href="https://youtube.com/playlist?list=PLKVkteTPlx5VZRjKbefvHPV62MM0KlOR3">Play music 🎧</Button>
            
            </div>
            <div className={classes.imageSection}>
                <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            </div>
        </div>
	{recommendedPosts.length && (
		<div className={classes.section}>
			<Typography gutterBottom variant="h5" style={{ }}>I guess.. You might also like 🎵</Typography>
			<Divider />
			<div className={classes.recommendedPosts}>
				{recommendedPosts.map(({ title, message, name, likes, selectedFile, _id}) => (
					<div style={{ padding: '20px 40px 10px 40px', margin: '10px', cursor: 'pointer', border: '1px solid lightgrey', borderRadius: '20px', width: '200px'}} className={classes.recomPost} onClick={() => openPost(_id)} key={_id}>
						<Typography gutterBottom variant="h6" className={classes.title}>{title}</Typography>
						<Typography gutterBottom variant="subtitle2" className={classes.name}>{name}</Typography>
						<Typography gutterBottom variant="subtitle2" className={classes.message}>{message}</Typography>
						<Typography gutterBottom variant="subtitle1">❤︎ {likes.length}</Typography>
						<img src={selectedFile} width="200px" style={{ borderRadius: '12px', margin: '10px 0 0 0'}} />
					</div>
				))}

			</div>
			
		</div>
	)}
        </Paper>
	)
}

export default PostDetails
