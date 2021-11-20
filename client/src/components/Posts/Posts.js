import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './style';


const Posts = ({ setCurrentId }) => {
	const { posts, isLoading } = useSelector((state) => state.posts);
	const classes = useStyles();

	if(!posts.length && !isLoading) {
		 return (
			<div className={classes.noPost}>No posts</div>
		 );
	}

	return(
		isLoading ? <CircularProgress color="secondary" /> : (
			
			<Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} >
				{posts?.map((post) => (
					<Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
						<Post post={post} setCurrentId={setCurrentId} />
					</Grid>
				))}
			</Grid>
		)
	);
}

export default React.memo(Posts);