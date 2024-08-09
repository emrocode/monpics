import { useEditor, useMonPics } from "../hooks";
import { Type, Download } from "lucide-react";
import clsx from "clsx";
import type { EditorToolbarProps } from "../types";

export default function EditorToolbar({
  css,
  buttonRef,
  isOpen,
  setIsOpen,
}: EditorToolbarProps) {
  const { file } = useMonPics();
  const { handleDownload, handleClick, iconProps, editorOptions } = useEditor();

  return (
    <div className={css.toolbar}>
      <button
        ref={buttonRef}
        type="button"
        className={clsx(css.button, {
          [css.active]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Text"
      >
        <Type {...iconProps} />
      </button>
      {editorOptions.map((item, index) => (
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
        type="button"
        className={clsx(css.button, css.active)}
        onClick={handleDownload}
        title="Download Image"
      >
        <Download {...iconProps} />
      </button>
    </div>
  );
}
