import React from "react";
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

export default () => {
    return (
    <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <h1>Post List</h1>
        <PostList />
    </div>
    );
}