import { createContext, useCallback } from "react";
import { useMonPics } from "../hooks";
import {
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
} from "lucide-react";
import type { FileProps, EditorContextProps } from "../types";

export const EditorContext = createContext<EditorContextProps | undefined>(
  undefined,
);

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { canvasRef, setFile } = useMonPics();

  // TODO: Add animation when downloading an image
  const handleDownload = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    a.href = url;
    a.download = `monpics_${day}${month}${year}_${canvas.width}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.dataset.option || "";

    setFile((prev: FileProps) => {
      return {
        ...prev,
        option: {
          ...prev.option,
          position: value,
        },
      };
    });
  }, []);

  const handleColorChange = useCallback((color: string) => {
    setFile((prev: FileProps) => {
      return {
        ...prev,
        option: {
          ...prev.option,
          color: color,
        },
      };
    });
  }, []);

  const iconProps = {
    size: 16,
  };

  const editorOptions = [
    {
      title: "Align Top",
      option: "top",
      icon: <AlignStartHorizontal {...iconProps} />,
    },
    {
      title: "Align Center",
      option: "center",
      icon: <AlignCenterHorizontal {...iconProps} />,
    },
    {
      title: "Align Bottom",
      option: "bottom",
      icon: <AlignEndHorizontal {...iconProps} />,
    },
  ];

  return (
    <EditorContext.Provider
      value={{
        handleDownload,
        handleClick,
        handleColorChange,
        iconProps,
        editorOptions,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
