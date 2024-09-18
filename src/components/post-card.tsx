import type { PostNode } from "../lib/hashnode";

type PostCardProps = PostNode & {};

const PostCard = ({
  title,
  url,
  content,
  tags,
  publishedAt,
}: PostCardProps) => {
  console.log(url);

  return (
    <article className="">
      <h2 className="text-lg font-bold link-hover">
        <a href={url} target="_blank">
          {title}
        </a>
      </h2>
      <span className="text-xs font-normal text-gray-600">
        {new Date(publishedAt).toDateString()}
      </span>
      <p className="text-base text-gray-500 line-clamp-3">{content.text}</p>
      <div className="mt-2 flex flex-wrap gap-2 justify-normal items-center">
        {tags.slice(0, 6).map((tag) => (
          <span
            key={tag.id}
            className="text-xs text-gray-500 border border-gray-500 px-2 py-1 rounded-full"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </article>
  );
};

export default PostCard;
