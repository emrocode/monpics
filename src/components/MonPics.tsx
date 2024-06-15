import { useState, useRef, useEffect } from "react";
import { drawImageProp, wrapText } from "../hooks";
import { Editor, Preview, UploadFile } from "./sections";

export default function MonPics() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<string>("");
  const [fileInfo, setFileInfo] = useState<FileList>();
  const [fileText, setFileText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [option, setOption] = useState<string>("bottom");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const value = e.currentTarget.dataset.value;
    const fileData = new File([], value || "", {
      type: "image/jpg",
      lastModified: 946695600000, // Fake timestamp
    });
    const dataTransfer = new DataTransfer();

    // console.log(value);
    value && setFile(value);
    dataTransfer.items.add(fileData);
    setFileInfo(dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.files &&
      e.target.files[0] &&
      e.target.files[0].type.startsWith("image/")
    ) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setFileInfo(e.target.files);
      setLoading(false);
    } else {
      console.error("Only image files are allowed");
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileText(e.target.value);
  };

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

    // Add dialog to reload page
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (file) {
        e.preventDefault();
        e.returnValue = "";
        return "Are you sure you want to reload the page?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [file, fileText, option]);

  return (
    <section className="container my-8">
      {!file ? (
        <UploadFile
          loading={loading}
          setLoading={setLoading}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      ) : (
        <>
          <Editor
            handleTextChange={handleTextChange}
            option={option}
            setOption={setOption}
          />
          <Preview file={file} fileInfo={fileInfo} canvasRef={canvasRef} />
        </>
      )}
    </section>
  );
}
