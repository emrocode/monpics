export type PreviewProps = {
  file: string;
  fileInfo: FileList | undefined;
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export type EditorProps = {
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  option: string;
  setOption: (option: string) => void;
};

export type UploadProps = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export type ThemeContextType = {
  toggleDarkMode: () => void;
};
