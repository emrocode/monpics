import Card from "../Card";
import type { GalleryProps } from "../../types";

const galleryItems = [
  {
    image: "demo1.webp",
    imageFullSize: "demo1.jpg",
    author: {
      name: "Jaime",
      profileUrl:
        "https://pixabay.com/users/photoshop-art-12454404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8436227",
    },
  },
  {
    image: "demo2.webp",
    imageFullSize: "demo2.jpg",
    author: {
      name: "Vandesart",
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
