export type EditorProps = {
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  option: string;
  setOption: (option: string) => void;
};

export type PreviewProps = {
  file: string;
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export type UploadProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleChange: (e: File[]) => void;
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
