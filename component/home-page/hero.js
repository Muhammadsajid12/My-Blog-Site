import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/PicsArt_04-29-09.37.48.jpg"
          alt="this is my img "
          width={300}
          height={300}
        ></Image>
      </div>
      <h1> Hi Muhammmad sajid</h1>
      <p>
        {" "}
        I like to call myself front end problem solver formore i love to learn
        new front end technologies daily...
      </p>
    </section>
  );
};

export default Hero;
