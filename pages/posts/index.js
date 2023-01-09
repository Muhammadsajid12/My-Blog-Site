import React, { Fragment } from "react";
import AllPosts from "../../component/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

const AllPost = ({ posts }) => {
  console.log(posts, "allposts");

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

// Here we getting all posts by staticprops....
export function getStaticProps() {
  // Here Im calling allpost fn for all postTab.....
  const allPosts = getAllPosts();
  console.log(getAllPosts, "getAllPost");

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPost;
