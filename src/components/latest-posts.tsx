import { useEffect, useState } from "react";
import { getPosts, type Post } from "../lib/hashnode";
import PostCard from "./post-card";
import { FaAngleRight } from "react-icons/fa6";

const LatestPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="max-w-2xl mx-auto my-3">
      <h2 className="uppercase max-w-fit border-b pb-2 pr-2 my-3">
        latest Articles
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        posts.length > 0 && (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.node.url} {...post.node} />
            ))}
          </div>
        )
      )}
      <hr className="mt-6 border-gray-700" />
      <a
        href="https://theshanumalik.hashnode.dev"
        className="btn btn-outline rounded-full w-full my-4 uppercase"
      >
        See all posts <FaAngleRight />
      </a>
    </div>
  );
};

export default LatestPosts;
