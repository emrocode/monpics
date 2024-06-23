import type { CardProps } from "../types";

export default function Card({
  image,
  imageFullSize,
  author,
  handleClick,
}: CardProps) {
  return (
    <article className="flex cursor-pointer flex-col gap-4 rounded-xl border p-4">
      <figure
        className="relative overflow-clip rounded-lg hover:opacity-80"
        onClick={handleClick}
        data-value={imageFullSize}
      >
        <img
          loading="eager"
          src={image}
          alt={`MonPics demo image by ${author.name}`}
          className="h-[160px] w-[360px] object-cover object-center"
        />
      </figure>
      <p className="text-sm">
        Image by{" "}
        <a
          href={author.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 underline hover:bg-sky-700/25"
        >
          {author.name}
        </a>{" "}
        from{" "}
        <a
          href="https://pixabay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 underline hover:bg-sky-700/25"
        >
          Pixabay
        </a>
      </p>
    </article>
  );
}
