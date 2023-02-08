import React from "react";
import Style from "../styles/about.module.css";
import pfp from "../public/images/pfp.png";
import Image from "next/image";

const about = () => {
  return (
    <div className={Style.container}>
      <h2>About Me</h2>
      <div className={Style.imageContainer}>
        <Image className={Style.image} src={pfp} />
      </div>
      <p className={Style.text}>
        Hi! I'm a 23-year-old software developer who has a passion for all
        things tech, art, music, and Pokémon.
      </p>
      <h3>Career</h3>
      <p className={Style.text}>
        As a software developer, I have a experience in writing Javascript web
        apps using current technologies such as React, React Native and Next.JS,
        and have experience working on both front-end and back-end development.
        My love for technology has driven me to constantly strive to learn and
        improve my skills, and I am always on the lookout for new and
        challenging projects.
      </p>
      <h3>Hobbies and Interests</h3>
      <p className={Style.text}>
        Music has always been a big part of my life, and I enjoy listening to a
        wide range of genres, from pop to hip-hop to classical. I also love to
        draw and create digital art in my free time.
      </p>
      <p className={Style.text}>
        In addition to music and art, I am also a big fan of Pokémon. I have
        been playing the games since I was a child and enjoy discussing and
        sharing my love for the franchise with others.
      </p>
      <h3>Identity</h3>
      <p className={Style.text}>
        I am a queer individual and an advocate for the LGBTQ+ community. I
        believe in creating a more inclusive and accepting world for all
        individuals, regardless of their sexual orientation or gender identity.
      </p>
      <p className={Style.text}>
        Overall, I am a creative, tech-savvy, and driven individual who is
        always looking for new and exciting opportunities. Whether it's coding,
        creating art, or just talking about Pokémon, I am always eager to learn
        and grow.
      </p>
    </div>
  );
};

export default about;
