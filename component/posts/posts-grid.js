import React from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

const PostsGrid = ({ posts }) => {
  console.log(posts, "postGrid");
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={Math.random()} />
      ))}
    </ul>
  );
};

export default PostsGrid;
