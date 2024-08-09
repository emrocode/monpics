export type MonPicsContextProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  file: FileProps;
  setFile: React.Dispatch<React.SetStateAction<FileProps>>;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleChange: (acceptedFiles: File[]) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type EditorContextProps = {
  handleDownload: () => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleColorChange: (color: string) => void;
  iconProps: object;
  editorOptions: {
    title: string;
    option: string;
    icon: JSX.Element;
  }[];
};

export type FileProps = {
  url: string;
  text: string;
  loading: boolean;
  option: {
    position: string;
    color: string;
    font: {
      size: number;
      weight: number;
      family: string;
    };
  };
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
  width: string | number;
  height: string | number;
  bgColor: string;
  fillColor: string;
};

export type TextMenuProps = {
  menuRef: React.MutableRefObject<HTMLDivElement>;
};

export type EditorToolbarProps = {
  css: CSSModuleClasses;
  buttonRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
