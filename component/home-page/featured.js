import React from "react";
import PostsGrid from "../posts/posts-grid";
import classes from "./feature-post.module.css";

const FeaturedPost = ({ posts }) => {
  console.log(posts);
  return (
    <div className={classes.latest}>
      <h2>FeaturedPost</h2>
      <PostsGrid posts={posts} />
    </div>
  );
};

export default FeaturedPost;
