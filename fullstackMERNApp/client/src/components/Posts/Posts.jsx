import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post.jsx';
import useStyles from './styles';

import PropTypes from 'prop-types';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
        >
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            )).reverse()}
        </Grid>
    );
};
Posts.propTypes = {
    setCurrentId: PropTypes.func
};

export default Posts;