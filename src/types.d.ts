export type PreviewProps = {
  file: string;
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export type EditorProps = {
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  align: string;
  setAlign: (align) => void;
};

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};
