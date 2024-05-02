import React, { useCallback, useRef, useState } from "react";
import { useMonPics } from "../../hooks";
import { useClickAway } from "@uidotdev/usehooks";
import {
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
  Type,
  Download,
} from "lucide-react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import clsx from "clsx";
import css from "../../styles/Editor.module.css";
import type { FileProps } from "../../types";

const Editor: React.FC = () => {
  const { canvasRef, file, setFile, handleTextChange } = useMonPics();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useClickAway<HTMLDivElement>((e) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  });

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

    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 500);
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

  const EditorOptions = [
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
    <div className={css.editor}>
      <input
        type="text"
        name="text"
        onInput={handleTextChange}
        placeholder="Write something..."
        className={css.textarea}
      />
      <div className={css.toolbar}>
        {EditorOptions.map((item, index) => (
          <button
            key={index}
            data-option={item.option}
            title={item.title}
            type="button"
            className={clsx(css.button, {
              [css.active]: file.option.position === item.option,
            })}
            onClick={handleClick}
          >
            {item.icon}
          </button>
        ))}
        <button
          ref={buttonRef}
          type="button"
          className={clsx(css.button, {
            [css.active]: isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
          title="Edit text color"
        >
          <Type {...iconProps} />
        </button>
      </div>
      <div className={css.toolbar}>
        <button
          type="button"
          className={clsx(css.button, css.active)}
          onClick={handleDownload}
        >
          <Download {...iconProps} />
          <span>{isDownloading ? "Downloading..." : "Download"}</span>
        </button>
      </div>
      {isOpen && (
        <div ref={menuRef} className={css.text_menu}>
          <div className={css.color_picker}>
            <HexColorPicker
              color={file.option.color}
              onChange={handleColorChange}
              className={css.hex_picker}
            />
            <HexColorInput
              color={file.option.color}
              placeholder="Hex color"
              onChange={handleColorChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Editor;
