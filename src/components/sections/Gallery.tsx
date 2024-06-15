import Card from "../Card";
import type { GalleryProps } from "../../types";

const galleryItems = [
  {
    image: "tiger.webp",
    imageFullSize: "tiger.jpg",
    author: {
      name: "Jaime Orejuela",
      profileUrl:
        "https://pixabay.com/users/photoshop-art-12454404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8436227",
    },
  },
  {
    image: "anime.webp",
    imageFullSize: "anime.jpg",
    author: {
      name: "vandesart",
      profileUrl:
        "https://pixabay.com/users/vandesart-39485690/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8788959",
    },
  },
];

const Gallery: React.FC<GalleryProps> = ({ handleClick }) => {
  return (
    <>
      <div className="grid w-full grid-cols-custom gap-4">
        {galleryItems.map((item, i) => (
          <Card
            image={item.image}
            imageFullSize={item.imageFullSize}
            author={item.author}
            handleClick={handleClick}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
