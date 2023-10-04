import axios from "axios";
import fs from "fs";
import matter from "gray-matter";
import { IPost, IThumbnail, IAvator } from "@/types/postType";

const getPostsByTag = async (tagg: string) => {
  try {
    // Get post data from Strapi
    const response = await axios.get(
      `http://127.0.0.1:1337/api/posts?populate=*`
    );

    const data = response.data.data;

    // Filter posts by tag
    const filteredPosts = data.filter(
      (post: IPost) =>
        post.attributes.tags.tags.map((t: string) => t).includes(tagg)
      // )
    );
    // console.log("filteredPosts", filteredPosts);

    return filteredPosts;
  } catch (error) {
    console.error("Error fetching posts by tag:", error);
    throw error;
  }
};

export { getPostsByTag };

// const postsDirectory = "posts"; // Directory where your markdown post files are stored
// const fileNames = fs.readdirSync(postsDirectory);

// const posts = fileNames
//   .map((fileName) => {
//     const fileContents = fs.readFileSync(
//       `${postsDirectory}/${fileName}`,
//       "utf-8"
//     );
//     const { data, content } = matter(fileContents);

//     // Check if the post has the specified tag
//     if (data.tags && data.tags.includes(tag)) {
//       return {
//         slug: fileName.replace(".md", ""),
//         title: data.title,
//         image: data.image,
//         category: data.category,
//         date: data.date,
//         author: data.author,
//         content, // Include the content of the post
//       };
//     }
//     return null;
//   })
//   .filter(Boolean);

// return posts;
