import {
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
} from "lucide-react";

export const galleryItems = [
  {
    id: 8436227,
    image: "demo1.webp",
    imageFullSize: "demo1.jpg",
    author: {
      name: "Jaime",
      profileUrl:
        "https://pixabay.com/users/photoshop-art-12454404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8436227",
    },
  },
  {
    id: 8788959,
    image: "demo2.webp",
    imageFullSize: "demo2.jpg",
    author: {
      name: "Vandesart",
      profileUrl:
        "https://pixabay.com/users/vandesart-39485690/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8788959",
    },
  },
];

export const EditorOptions = [
  {
    title: "Align Top",
    option: "top",
    icon: <AlignStartHorizontal size={16} />,
  },
  {
    title: "Align Center",
    option: "center",
    icon: <AlignCenterHorizontal size={16} />,
  },
  {
    title: "Align Bottom",
    option: "bottom",
    icon: <AlignEndHorizontal size={16} />,
  },
];
