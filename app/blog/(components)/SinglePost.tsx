"use client";

import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { PostMetadata } from "@/types/PostMetadata";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { IPost, IThumbnail, IAvator } from "@/types/postType";
import axios from "axios";
import { Button } from "@/components/ui/button";

// get posts from strapi
const getPosts = async () => {
  const response = await axios.get(
    "http://127.0.0.1:1337/api/posts?populate=*"
  );

  const data = response.data;
  return data;
};

const SinglePost = async () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPosts, setShowPosts] = useState(4);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const fetchData = async () => {
      const response = await axios.get(
        `http://127.0.0.1:1337/api/posts?populate=*`
      );
      const data = response.data;

      // sort posts by date
      data.data.sort((a: IPost, b: IPost) => {
        return (
          new Date(b.attributes.date).valueOf() -
          new Date(a.attributes.date).valueOf()
        );
      });

      const filterPosts = data.data.slice(1, showPosts);
      setFilteredPosts(filterPosts);
    };

    fetchData();

    return () => clearTimeout(timer);
  }, [showPosts]);

  const exectpost = await getPosts();

  const post: IPost[] = exectpost.data;

  // sort posts by date
  post.sort((a, b) => {
    return (
      new Date(b.attributes.date).valueOf() -
      new Date(a.attributes.date).valueOf()
    );
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputElement = event.target as HTMLInputElement;
      const filteredPosts = post
        .slice(1, showPosts)
        .filter((post) =>
          post.attributes.title
            .toLowerCase()
            .includes(inputElement.value.toLowerCase())
        );
      setFilteredPosts(filteredPosts);
    }
  };

  return (
    <>
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center border-b border-custom_border pb-2 relative">
          <p className="text-custom_secondary text-lg font-medium md:font-bold  md:text-2xl">
            Latest Posts
          </p>
          <div className="absolute left-0 bottom-0 bg-custom_border w-11 md:w-16 h-[5px]"></div>
          <div className="flex items-center gap-2 border border-custom_border rounded-md w-44 md:w-[20rem] px-2 py-1 md:py-2 focus-within:ring-2 focus-within:ring-custom_primary">
            <BiSearch className="text-custom_textColor md:text-xl" />
            <input
              type="text"
              className="w-full text-custom_secondary focus:outline-none"
              placeholder="Search posts"
              onKeyDown={(event) => handleKeyDown(event)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-3 md:flex-row md:flex-wrap mt-16">
          {/* {blogPosts} */}
          {filteredPosts?.length === 0 ? (
            <p className="text-custom_secondary font-semibold mx-auto ">
              No posts found.
            </p>
          ) : (
            filteredPosts.map((post) => {
              return (
                <div
                  className="flex flex-col border border-custom_border md:w-[370px] rounded-lg px-5 py-5"
                  key={post.attributes.title}
                >
                  {post.attributes.thumbnail.data.map(
                    (thumbnail: IThumbnail) => (
                      <>
                        {isLoading ? (
                          <Skeleton height={200} />
                        ) : (
                          <Image
                            src={`http://127.0.0.1:1337${thumbnail.attributes.url}`}
                            className="w-full flex-1 rounded-md"
                            width={300}
                            height={300}
                            alt="..."
                            key={thumbnail.id}
                          />
                        )}
                      </>
                    )
                  )}

                  {isLoading ? (
                    <Skeleton
                      height={20}
                      width={100}
                      style={{ marginTop: "8px" }}
                    />
                  ) : (
                    <div className=" text-sm font-medium mt-2 inline-block flex-1 cursor-pointer">
                      <Link href={`/blog/tag/${post.attributes.category}`}>
                        <Badge
                          variant="outline"
                          className="text-custom_primary bg-custom_primary/5 ring-none hover:ring-[1px] hover:ring-custom_primary"
                        >
                          #{post.attributes.category}
                        </Badge>
                      </Link>
                    </div>
                  )}
                  {isLoading ? (
                    <Skeleton
                      height={20}
                      width={260}
                      count={2}
                      style={{ marginTop: "8px" }}
                    />
                  ) : (
                    <Link href={`/blog/posts/${post.attributes.slug}`}>
                      <p className="mt-3 text-custom_secondary font-semibold cursor-pointer hover:text-custom_primary/80 h-10 flex-1 ">
                        {post.attributes.title.slice(0, 60) +
                          (post.attributes.title.length > 60 ? " ..." : "")}
                      </p>
                    </Link>
                  )}
                  <div className="flex gap-3 items-center mt-4">
                    {isLoading ? (
                      <Skeleton circle height={44} width={44} />
                    ) : (
                      post.attributes.author_image.data.map(
                        (avator: IAvator) => {
                          return (
                            <Image
                              src={`http://127.0.0.1:1337${avator.attributes.url}`}
                              className="w-11 h-11 cursor-pointer rounded-full"
                              width={300}
                              height={300}
                              alt="..."
                              key={avator.id}
                            />
                          );
                        }
                      )
                    )}
                    <div className="text-custom_textColor text-sm">
                      {isLoading ? (
                        <Skeleton
                          height={16}
                          width={100}
                          style={{ marginBottom: "4px" }}
                        />
                      ) : (
                        <p>Hanad Mohamed</p>
                      )}
                      {isLoading ? (
                        <Skeleton height={16} width={80} />
                      ) : (
                        <p>{post.attributes.date}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {showPosts > 0 && showPosts < 5 && filteredPosts.length > 0 && (
          <div className="flex justify-center mt-10">
            <Button
              className="border-custom_border text-custom_textColor"
              variant={"outline"}
              onClick={() => {
                setShowPosts(10);
              }}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default SinglePost;
