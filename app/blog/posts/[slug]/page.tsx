import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";
import PostsBreadCrumb from "../../(components)/PostsBreadCrumb";
import Link from "next/link";
import SideBar from "../../(components)/SideBar";
import ScrollIndicator from "@/components/ScrollIndicator";
import { FiTag } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Code } from "bright";
import { IPost, IThumbnail, IAvator } from "@/types/postType";
import axios from "axios";

Code.theme = "dracula";

export async function getStaticPaths() {
  const response = await axios.get("http://127.0.0.1:1337/api/posts");
  const paths = response.data.data.map((post: IPost) => {
    return { params: { slug: post.attributes.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

// get post data from strapi
const getPosts = async (slug: string) => {
  const response = await axios.get(
    `http://127.0.0.1:1337/api/posts/${slug}?populate=*`
  );

  const data = response.data;
  return data.data;
};

const BlogPost = async (props: any) => {
  // console.log("props:", props);
  const slug = props.params.slug;
  const post = await getPosts(slug);
  const content = post.attributes.content;
  const tags = post.attributes.tags.tags;
  const image = post.attributes.thumbnail.data[0].attributes.url;

  // Wrap the code component in a function
  const renderCode = (props: any) => {
    return <Code lang="js" {...props} />;
  };

  return (
    <>
      <ScrollIndicator />
      <div>
        <PostsBreadCrumb
          author={post.attributes.author}
          title={post.attributes.title}
          date={post.attributes.date}
          category={post.attributes.category}
        />
      </div>
      <div className="mx-auto px-4  md:px-10 py-16  flex flex-col md:flex-row justify-center gap-x-10 gap-y-10 ">
        <div className="max-[450px]:w-[22rem] m-auto break-words sm:mx-4 border-b pb-5 md:pd-0 md:border-b-0">
          <Image
            src={`http://127.0.0.1:1337${image}`}
            alt={slug}
            width={400}
            height={300}
            className="w-full md:max-h-[26rem]"
          />
          <article className="mt-16 prose md:prose-lg dark:prose-invert prose-img:w-full  prose-img:rounded prose-headings:text-custom_secondary prose-img:mx-auto md:prose-img:h-[22rem] prose-a:text-blue-400 ">
            <Markdown
              options={{
                overrides: {
                  code: renderCode, // Use the function to render the Code component
                },
              }}
            >
              {content}
            </Markdown>
          </article>
          {/* tags */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex items-center gap-1">
              <span className="text-lg text-custom_secondary font-medium ">
                Tags:
              </span>
              <FiTag className="text-custom_secondary text-xl -mb-1 rotate-90" />
            </div>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag: string) => (
                <Link href={`/blog/tag/${tag}`} key={tag}>
                  <Badge className="py-2 text-sm font-normal"> {tag}</Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* side bar */}
        <SideBar placeholder="posts" />
      </div>
    </>
  );
};

export default BlogPost;
