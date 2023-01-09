import React from "react";
import PostsGrid from "./posts-grid";
import classes from "./all-posts.module.css";

const AllPosts = ({ posts }) => {
  // Here we simply getting the data from pages/post/index as a props....
  return (
    <header className={classes.posts}>
      <h1> All Posts</h1>
      <PostsGrid posts={posts} />
    </header>
  );
};

export default AllPosts;
