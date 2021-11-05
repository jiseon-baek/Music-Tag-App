import React from 'react';
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import useStyles from './style';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const user = JSON.parse(localStorage.getItem('profile'));

	const Likes = () => {
		if (post.likes.length > 0) {
			return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
				? (
					<><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
				) : (
					<><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
				);
		}

		return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
	};

	const openLink = () => {
		history.push(`/posts/${post._id}`)
	};

	return (
		<div className={classes.container}>
			<div className={classes.cards} raised="true" elevation={6}>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image={post.selectedFile} onClick={openLink} title={post.title} />
					<div className={classes.overlay}>
						<Typography variant="h6" style={{ fontWeight: '100', fontStyle: "normal" }}>{post.name}</Typography>
						<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
					</div>
					{(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
						<div className={classes.overlay2}>
							<Button
								style={{ color: 'white' }}
								size="small"
								onClick={() => setCurrentId(post._id)}>
								<MoreHorizIcon fontSize="medium" />
							</Button>
						</div>
					)}
					<div className={classes.details}>
						<Typography variant="body2" color="textSecondary" style={{ fontWeight: '100', fontStyle: "normal", fontSize: "13.5px" }}>{post.tags.map((tag) => `#️${tag} `)}</Typography>
					</div>
					<Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
					<CardContent>
						<Typography variant="body1" color="textSecondary" component="p">💬 {post.message}</Typography>
					</CardContent>

					<CardActions className={classes.cardActions}>
						<Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
							<Likes />
						</Button>
						{(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
							<Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
								<DeleteIcon fontSize="small" /> Delete
							</Button>
						)}

					</CardActions>

				</Card>
			</div>
		</div>
	);
}

export default Post;