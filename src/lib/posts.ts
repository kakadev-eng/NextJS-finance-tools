import fs from "fs";

import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "content/posts"
);

export function getPosts() {
  const files =
    fs.readdirSync(postsDirectory);

  const posts = files.map((file) => {
    const filePath = path.join(
      postsDirectory,
      file
    );

    const content =
      fs.readFileSync(filePath, "utf8");

    const { data } = matter(content);

    return data;
  });

  return posts;
}

export function getPostBySlug(
  slug: string
) {
  const fullPath = path.join(
    postsDirectory,
    `${slug}.md`
  );

  const fileContents =
    fs.readFileSync(fullPath, "utf8");

  const { data, content } =
    matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}