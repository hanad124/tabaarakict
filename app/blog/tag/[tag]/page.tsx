import getPostMetadata from "@/components/getPostMetadata";
import React from "react";
import { getPostsByTag } from "../../(components)/GetPostsByTag";
import Image from "next/image";
import Link from "next/link";
import ScrollIndicator from "@/components/ScrollIndicator";
import TagsBreadCrumb from "../../(components)/TagsBreadCrumb";
import SideBar from "../../(components)/SideBar";
import Markdown from "markdown-to-jsx";
import { Badge } from "@/components/ui/badge";
import { FiUser } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { IPost, IThumbnail, IAvator } from "@/types/postType";
import axios from "axios";

export async function getStaticPaths() {
  const response = await axios.get("http://127.0.0.1:1337/api/posts");
  const paths = response.data.data.map((post: IPost) => {
    return { params: { tag: post.attributes.category } };
  });

  return {
    paths,
    fallback: false,
  };
}

const page = async (props: any) => {
  // Generate breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: props.params.tag, href: `/blog/category/${props.params.tag}` },
  ];
  // console.log("PROPS:", props);
  const postTag = await getPostsByTag(props.params.tag);
  const postTagLength = postTag.length;
  return (
    <>
      <ScrollIndicator />
      <div className="">
        <TagsBreadCrumb
          items={breadcrumbItems}
          postTag={props.params.tag}
          postTagLength={postTagLength}
        />
      </div>
      {/* ====== */}
      <div className="mx-auto px-4  md:px-10 py-16  flex flex-col md:flex-row justify-center gap-x-5 gap-y-10 ">
        <div className="max-[450px]:w-[22rem] break-words sm:mx-4 ">
          <div className="mx-auto  flex flex-col justify-center gap-x-10 gap-y-10  ">
            {postTag.map((post: IPost) => (
              <div
                className="flex flex-col border rounded-md overflow-hidden md:max-w-3xl"
                key={post.attributes.slug}
              >
                <div className="relative w-full">
                  <Link
                    href={`/blog/posts/${post.attributes.slug}`}
                    className=" underline-non"
                  >
                    {post.attributes.thumbnail.data.map(
                      (thumbnail: IThumbnail) => (
                        <Image
                          src={`http://127.0.0.1:1337${thumbnail.attributes.url}`}
                          alt={post.attributes.title}
                          width={500}
                          height={500}
                          className=" w-full md:h-[24rem]"
                        />
                      )
                    )}
                  </Link>
                  {/* <Image
                      src={post.a.image}
                      alt={post.title}
                      width={500}
                      height={500}
                      className=" w-full md:h-[24rem]"
                    />
                  </Link> */}
                  <Badge className="absolute -bottom-8 mx-auto md:-bottom-4 left-10 transform flex flex-col md:flex-row justify-start items-start md:items-center gap-3 py-2 font-normal text-sm hover:bg-custom_primary">
                    <div className="flex items-center gap-2">
                      <FiUser className="w-4 h-4 " />
                      <span>{post.attributes.author}</span>
                    </div>
                    <span className="hidden md:block">/</span>
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{post.attributes.date}</span>
                    </div>
                    <span className="hidden md:block">/</span>
                    <div className="flex items-center gap-2">
                      <FiTag className="w-4 h-4 rotate-45" />
                      <span>{post.attributes.category}</span>
                    </div>
                  </Badge>
                </div>
                <Link
                  href={`/blog/posts/${post.attributes.slug}`}
                  className=" underline-non"
                >
                  <h2 className="text-3xl font-bold underline-none  md:mt-10 text-custom_secondary px-4 md:px-10 md:py-0 py-16 ">
                    {post.attributes.title}
                  </h2>
                </Link>
                <article className=" md:my-7 prose md:prose-lg dark:prose-invert  prose-img:rounded prose-headings:text -mt-10 px-4 prose-headings:underline-none  md:px-10 md:py-0 pb-10  ">
                  <Markdown>
                    {post.attributes.content.length > 200
                      ? post.attributes.content.slice(0, 200) + "..."
                      : post.attributes.content}
                  </Markdown>
                </article>
                <div className="inline px-4 md:px-10 mb-8 md:py-0 py-16 ">
                  <Link href={`/blog/posts/${post.attributes.slug}`}>
                    <Button className="flex items-center gap-2 py-6 border bg-transparent text-custom_secondary hover:bg-custom_primary hover:text-background shadow-none">
                      <span>Continue Reading</span>
                      <span className="font-bold text-lg"> &rarr;</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* side bar */}
        <SideBar placeholder="posts" />
      </div>
    </>
  );
};

export default page;
