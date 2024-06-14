import type { CardProps } from "../types";

export default function Card({
  image,
  imageFullSize,
  author,
  handleClick,
}: CardProps) {
  return (
    <article
      className="flex cursor-pointer flex-col gap-4 rounded-xl border p-4"
      onClick={handleClick}
      data-value={imageFullSize}
    >
      <figure className="relative overflow-clip rounded-lg">
        <img
          decoding="sync"
          loading="eager"
          src={image}
          alt={`MonPics demo image by ${author.name}`}
          className="h-[160px] w-full object-cover object-center"
        />
      </figure>
      <p className="text-sm">
        Image by{" "}
        <a
          href={author.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 underline hover:bg-sky-500/25"
        >
          {author.name}
        </a>
      </p>
    </article>
  );
}
