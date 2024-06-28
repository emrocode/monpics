import { useState, useRef, useEffect } from "react";
import { drawImageProp, wrapText } from "../monpics";
import { Editor, Preview, UploadFile } from "./sections";
import clsx from "clsx";
import css from "../styles/MonPics.module.css";

export default function MonPics() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<string>("");
  const [fileText, setFileText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [option, setOption] = useState<string>("bottom");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const value = e.currentTarget.dataset.value;
    // console.log(value);
    value && setFile(value);
  };

  const handleChange = (acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(URL.createObjectURL(selectedFile));
      setLoading(false);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileText(e.target.value);
  };

  const uploadFileProps = { loading, setLoading, handleClick, handleChange };
  const editorProps = { handleTextChange, canvasRef, option, setOption };
  const previewProps = { file, canvasRef };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !file) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      const offsetX = 0.5; // Center X
      const offsetY = 0.5; // Center Y
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Clear canvas
      // Avoid text duplication
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      drawImageProp(
        ctx,
        img,
        0,
        0,
        canvasWidth,
        canvasHeight,
        offsetX,
        offsetY,
      );

      // Text styles
      const shadowBase = 5;

      // TODO: Make the text customizable
      ctx.fillStyle = "white";
      ctx.font = "bold 56pt Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Text shadow
      ctx.shadowColor = "black";
      ctx.shadowBlur = shadowBase * 2;
      ctx.shadowOffsetX = shadowBase;
      ctx.shadowOffsetY = shadowBase;

      const text = fileText;
      const maxWidth = canvasWidth - 80;
      const x = canvasWidth / 2;
      const y = canvasHeight;

      wrapText(ctx, text, x, y, maxWidth, option);
    };

    // Set image source preview
    img.src = file;

    // Add dialog before reload page
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (file) {
        e.preventDefault();
        e.returnValue = "";
        return "Are you sure you want to reload the page?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [file, fileText, option, canvasRef]);

  return (
    <section className={clsx("container", css.container)}>
      {!file ? (
        <UploadFile {...uploadFileProps} />
      ) : (
        <div className={css.wrapper}>
          <Editor {...editorProps} />
          <Preview {...previewProps} />
        </div>
      )}
    </section>
  );
}
