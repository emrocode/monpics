export const navItems = [];

export const galleryItems = [
  {
    id: 8436227,
    image: "/images/demo1.webp",
    imageFullSize:
      "https://cdn.jsdelivr.net/gh/emrocode/monpics@main/public/images/demo1.jpg",
    author: {
      name: "Jaime",
      profileUrl:
        "https://pixabay.com/users/photoshop-art-12454404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8436227",
    },
  },
  {
    id: 8788959,
    image: "/images/demo2.webp",
    imageFullSize:
      "https://cdn.jsdelivr.net/gh/emrocode/monpics@main/public/images/demo2.jpg",
    author: {
      name: "Vandesart",
      profileUrl:
        "https://pixabay.com/users/vandesart-39485690/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8788959",
    },
  },
];

export const initialState = {
  url: "",
  text: "",
  loading: false,
  option: {
    position: "bottom",
    color: "#ffffff",
    shadow: false,
    font: {
      size: 56,
      weight: 700,
      family: "Open Sans",
    },
  },
};
