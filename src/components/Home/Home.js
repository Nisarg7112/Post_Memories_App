import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import useStyles from '../../styles';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);

  // When dispatch is called with an action object, it sends the action to the Redux
  // store, where it is then processed by the reducer
  const dispatch = useDispatch();

  useEffect(() => {
    // this will call getposts in actions/posts
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid  container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
