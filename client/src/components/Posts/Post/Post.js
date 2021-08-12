import React from 'react';
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './style';


const Post = ({ post }) => {
	const classes = useStyles();
	return(
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
            <div className={classes.overlay2}>
				<Button 
					style={{ color: 'lightgrey'}} 
					size="small" 
					onClick={() => {}}>
					<MoreHorizIcon fontSize="medium" />
				</Button>
			</div>
            <div className={classes.details}>
				<Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#️${tag} `)}</Typography>
			</div>
            <CardContent>
				<Typography variant="body" color="textSecondary" component="p">💬 {post.message}</Typography>
			</CardContent>
            <CardActions className={classes.cardActions}>
				<Button size="small" color="" onClick={() => {}}>
					<ThumbUpAltIcon fontSize="small" />
					&nbsp; Like &nbsp;
					{post.likeCount}
				</Button>
				<Button size="small" color="" onClick={() => {}}>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
}

export default Post;