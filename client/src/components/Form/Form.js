import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Divider } from '@material-ui/core';
import FireBase from '@types/react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './style';
import { createPost, updatePost } from '../../actions/posts';
;
const Form = ({ currentId, setCurrentId }) => {
	
	const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
	const [ postData, setPostData ] = useState({ title: '', message: '', tags: '', selectedFile: ''});
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));
	const history = useHistory();


	useEffect(() => {
		if(post) setPostData(post);
	}, [post]);

	const handleSubmit = async (e) => {
		e.preventDefault();
	    
		if (currentId === 0) {
		  dispatch(createPost({ ...postData, name: user?.result?.name }, history));
		  
		  clear();
		} else {
		  dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
		  clear();
		}
	      };
	      
	      if(!user?.result?.name) {
		      return (
			      <Paper className={classes.paper}>
				      <Typography className={classes.typo1} variant="h6" align="center">
					      Welcome!👋🏻 Please Sign In to create your music post or like other's post!
					      
				      </Typography>
				      <Divider style={{ margin: '10px 0' }} />
				      <Typography className={classes.typo2} variant="h6" align="center">
				      	Music Tag App에 오신 것을 <br /> 환영합니다 🎵 <br /> 나만의 음악을 공유하고 싶다면 <br /> 로그인해주세요 ☺
				      </Typography>
				      
			      </Paper>
		      )
	      }

	const clear = () => {
		setCurrentId(null);
		setPostData({ title: '', message: '', tags: '', selectedFile: ''});
	}
	
	return(
		<Paper className={classes.paper}>
			<form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
			<Typography className={classes.header} variant="h6">{currentId? 'Editing' : 'Writing' } your Soul Music</Typography>
			<TextField name="title" variant="outlined" label="Music Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
			<TextField name="message" variant="outlined" label="Singer" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
			<TextField name="tags" variant="outlined" label="♯ Tags (ex.pop,k-pop)"  fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
			<div className={classes.fileInput}><FireBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/></div>
			<Button className={classes.buttonSubmit} variant="contained" color="default" size="large" type="submit" fullWidth>Submit</Button>
			<Button className={classes.buttonClear} variant="contained" color="default" size="small" onClick={clear} fullWidth>Clear</Button>
			</form>
		</Paper>
		
	);
}

export default React.memo(Form);