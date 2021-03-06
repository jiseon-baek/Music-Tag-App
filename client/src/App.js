import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

import { Container } from '@material-ui/core';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxwidth='false' style={{ padding: '0' }}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={() => <Redirect to='/posts' />} />
          <Route path='/posts' exact component={Home} />
          <Route path='/posts/search' exact component={Home} />
          <Route path='/posts/:id' component={PostDetails} />
          <Route
            path='/auth'
            exact
            component={() => (!user ? <Auth /> : <Redirect to='/posts' />)}
          />
          <Redirect path='*' to='/' />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
