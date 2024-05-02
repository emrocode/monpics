import { createContext, useState, useEffect, useRef } from "react";
import { drawImageProp, drawTextProp } from "../canvas";
import { initialState } from "../data";
import type { MonPicsContextProps, FileProps } from "../types";

export const MonPicsContext = createContext<MonPicsContextProps | undefined>(
  undefined,
);

export const MonPicsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<FileProps>(initialState);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const name = e.currentTarget.dataset?.name || "";
    const value = e.currentTarget.dataset.value;
    // console.log(name, value);
    value &&
      setFile((prev) => {
        return { ...prev, [name]: value };
      });
  };

  const handleChange = (acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const value = URL.createObjectURL(selectedFile);
      setFile((prev) => {
        return {
          ...prev,
          url: value,
        };
      });
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const txt = e.target.value;

    setFile((prev) => {
      return { ...prev, [name]: txt };
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !file.url) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      const offsetX = 0.5; // Center X
      const offsetY = 0.5; // Center Y
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const maxWidth = canvasWidth - 80;
      const x = canvasWidth / 2;
      const y = canvasHeight;

      // Clear canvas
      // ! Avoid text duplication
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

      // Disable context menu
      canvas.oncontextmenu = (e: MouseEvent) => {
        e.preventDefault();
      };

      drawTextProp(ctx, x, y, file, maxWidth);
    };

    // Set image source preview
    // Add crossOrigin to download images
    img.src = file.url;
    img.crossOrigin = "anonymous";

    // Add dialog before reload page
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (file.url) {
        e.preventDefault();
        e.returnValue = "";
        return "Are you sure you want to reload the page?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [file, canvasRef]);

  return (
    <MonPicsContext.Provider
      value={{
        canvasRef,
        file,
        setFile,
        handleClick,
        handleChange,
        handleTextChange,
      }}
    >
      {children}
    </MonPicsContext.Provider>
  );
};
