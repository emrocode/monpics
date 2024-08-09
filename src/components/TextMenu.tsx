import { HexColorInput, HexColorPicker } from "react-colorful";
import { useEditor, useMonPics } from "../hooks";
import css from "../styles/TextMenu.module.css";
import TextArea from "./TextArea";
import type { TextMenuProps } from "../types";

export default function TextMenu({ menuRef }: TextMenuProps) {
  const { file } = useMonPics();
  const { handleColorChange } = useEditor();

  return (
    <div ref={menuRef} className={css.text_menu}>
      <TextArea className={css.textarea} />
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
  );
}
