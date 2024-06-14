import Card from "../Card";
import { Info } from "lucide-react";
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
      <p className="flex items-center gap-x-2 text-sm">
        <Info size={16} color="#0ea5e9" />
        <span>
          All images are sourced from{" "}
          <a
            href="https://pixabay.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 underline hover:bg-sky-500/25"
          >
            Pixabay
          </a>
        </span>
      </p>
    </>
  );
};

export default Gallery;
