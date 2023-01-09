import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  // Here im formating the date to make human readable..
  const formatedDate = new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // This path buil for image..
  const imagePath = `/images/posts/${slug}/${image}`;
  console.log(imagePath);
  // This slug comes from posts/index by get staticprops...
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3> {title}</h3>
            <time> {formatedDate}</time>
            <p> {excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
