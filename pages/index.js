import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Style from "../styles/card.module.css";

const index = ({ posts }) => {
  return (
    <div className={Style.container}>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug}>
          <Link href={`/post/${slug}`} className={Style.link}>
            <Image
              className={Style.image}
              width={650}
              height={340}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
            />
            <h3 className={Style.title}>
              {frontmatter.title} - {frontmatter.date}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
