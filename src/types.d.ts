export type FileProps = {
  url: string;
  text: string;
  loading: boolean;
  option: {
    position: string;
    color: string;
  };
};

export type MonPicsContextProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  file: FileProps;
  setFile: React.Dispatch<React.SetStateAction<FileProps>>;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleChange: (acceptedFiles: File[]) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type GalleryProps = {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export type CardProps = {
  image: string;
  imageFullSize: string;
  author: {
    name: string;
    profileUrl: string;
  };
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export type LogoProps = {
  width: number | string;
  height: number | string;
  bgColor: string;
  fillColor: string;
};
