import fs from "fs";
import path from "path";
import matter from "gray-matter";
// This PostDirectry var give the path where to read the files...
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

// This function get the files name and dive into files and read metadata retrun acutall content....|| we add the postIdentifier variable because we need file with and without md extention..What ever we call this fn by other fn or other page..

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  // filecontent variable have the metadata and also the content we have to splite...
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // Here we spliting the data using matter package.....
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  console.log(postData, "postData..");
  return postData;
}

// This function just  retrun the array of file names...
export function getAllPosts() {
  // This postFiles var will return the all files which is exsit in postsfolder....
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  // console.log(sortedPosts, "Sorted data");
  return sortedPosts;
}
// This fn  return that post which is Featured......
export function getFeaturedPosts() {
  const posts = getAllPosts();
  console.log(posts, "featuredPost back end");
  const featuredPost = posts.filter((post) => post.isFeatured);
  return featuredPost;
}

// import fs from "fs";
// import path from "path";

// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getPostsFiles() {
//   return fs.readdirSync(postsDirectory);
// }

// export function getPostData(postIdentifier) {
//   const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
//   const filePath = path.join(postsDirectory, `${postSlug}.md`);
//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(fileContent);

//   const postData = {
//     slug: postSlug,
//     ...data,
//     content,
//   };

//   return postData;
// }

// export function getAllPosts() {
//   const postFiles = getPostsFiles();

//   const allPosts = postFiles.map((postFile) => {
//     return getPostData(postFile);
//   });

//   const sortedPosts = allPosts.sort((postA, postB) =>
//     postA.date > postB.date ? -1 : 1
//   );

//   return sortedPosts;
// }

// export function getFeaturedPosts() {
//   const allPosts = getAllPosts();

//   const featuredPosts = allPosts.filter((post) => post.isFeatured);

//   return featuredPosts;
// }
