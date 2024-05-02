import css from "../styles/Card.module.css";
import type { CardProps } from "../types";

export default function Card({
  image,
  imageFullSize,
  author,
  handleClick,
}: CardProps) {
  return (
    <article className={css.card}>
      <figure
        className={css.card_img}
        onClick={handleClick}
        data-name="url"
        data-value={imageFullSize}
      >
        <img
          src={image}
          alt={`MonPics demo image by ${author.name}`}
          width={360}
          height={160}
          decoding="async"
          draggable={false}
        />
      </figure>
      <div className={css.card_body}>
        <p className={css.card_par}>
          Image by{" "}
          <a
            href={author.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={css.card_link}
          >
            {author.name}
          </a>{" "}
          from{" "}
          <a
            href="https://pixabay.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.card_link}
          >
            Pixabay
          </a>
        </p>
      </div>
    </article>
  );
}
