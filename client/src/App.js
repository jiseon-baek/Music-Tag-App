import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import music from './images/music.png';
import useStyles from './style';

const App = () => {
	const [ currentId, setCurrentId ] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
	    dispatch(getPosts());
    }, [currentId, dispatch]);

	return( 
		<Container maxwidth="lg">
			
			<Grow in>
				<Container>
					<Grid container justifyContent="space-between" alignItems="" spacing={3}>
						
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;