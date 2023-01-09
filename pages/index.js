import React, { Fragment } from "react";
import Hero from "../component/home-page/hero";
import FeaturedPost from "../component/home-page/featured";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";
const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Muhammad Sajid Blog</title>
        {/*  In metaData we can add ficons and images which will show when we share the links to another plateform...... */}
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPost posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();
  // console.log(featuredPost, "featuredPost");

  return {
    props: {
      posts: featuredPost,
    },
  };
}

export default HomePage;
