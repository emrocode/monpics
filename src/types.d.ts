export type PreviewProps = {
  file: string;
  fileInfo: FileList|undefined;
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export type EditorProps = {
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  option: string;
  setOption: (option) => void;
};
