import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { IPost, IThumbnail, IAvator } from "@/types/postType";

const getPosts = async () => {
  const response = await axios.get(
    "http://127.0.0.1:1337/api/posts?populate=*"
  );

  const data = response.data;
  return data;
};

const Blogs = async () => {
  const posts = await getPosts();

  return (
    <>
      <div className="container">
        <h2 className="mt-5 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
          Latest blog & news{" "}
        </h2>
        <p className="text-custom_textColor my-3 leading-relaxed text-center mx-3 lg:mx-80 md:mx-36">
          Stay updated with the latest trends, insights, and news in the world
          of ICT Through our informative blog and news articles. Explore our
          recent posts below:{" "}
        </p>
        <div className="flex flex-col justify-start gap-3 md:flex-row md:flex-wrap mt-16">
          {posts.data.slice(0, 3).map((post: IPost) => {
            return (
              <div
                className="flex flex-col border border-custom_border md:w-[370px] rounded-lg px-5 py-5"
                key={post.attributes.slug}
              >
                {post.attributes.thumbnail.data.map((thumbnail: IThumbnail) => {
                  return (
                    <Image
                      src={`http://127.0.0.1:1337${thumbnail.attributes.url}`}
                      className="w-full flex-1 rounded-md"
                      width={300}
                      height={300}
                      alt="..."
                      key={thumbnail.id}
                    />
                  );
                })}
                <div className="text-sm font-medium mt-2 inline-block flex-1 cursor-pointer">
                  <Link href={`/blog/tag/${post.attributes.category}`}>
                    <Badge
                      variant="outline"
                      className="text-custom_primary bg-custom_primary/5 ring-none hover:ring-[1px] hover:ring-custom_primary"
                    >
                      #{post.attributes.category}
                    </Badge>
                  </Link>
                </div>

                <Link href={`/blog/posts/${post.attributes.slug}`}>
                  <p className="mt-3 text-custom_secondary font-semibold cursor-pointer hover:text-custom_primary/80 h-10 flex-1">
                    {post.attributes.title.slice(0, 60) +
                      (post.attributes.title.length > 60 ? " ..." : "")}
                  </p>
                </Link>
                <div className="flex gap-3 items-center mt-4">
                  {post.attributes.author_image.data.map((avator: IAvator) => {
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
                  })}
                  <div className="text-custom_textColor text-sm">
                    <p>{post.attributes.author}</p>
                    <p>{post.attributes.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
