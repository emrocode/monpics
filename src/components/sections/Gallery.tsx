import Card from "../Card";
import { galleryItems } from "../../data";
import type { GalleryProps } from "../../types";

const Gallery: React.FC<GalleryProps> = ({ handleClick }) => {
  return (
    <div className="grid w-full grid-cols-custom gap-2">
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
