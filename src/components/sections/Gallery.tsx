import Card from "../Card";
import { galleryItems } from "../../data";
import css from "../../styles/Gallery.module.css";
import type { GalleryProps } from "../../types";

const Gallery: React.FC<GalleryProps> = ({ handleClick }) => {
  return (
    <div className={css.wrapper}>
      {galleryItems.map(({ id, image, imageFullSize, author }) => (
        <Card
          image={image}
          imageFullSize={imageFullSize}
          author={author}
          handleClick={handleClick}
          key={id}
        />
      ))}
    </div>
  );
};

export default Gallery;
