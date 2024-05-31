import clsx from "clsx";
import {
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
} from "lucide-react";
import { EditorProps } from "../types";

const Editor: React.FC<EditorProps> = ({
  handleTextChange,
  align,
  setAlign,
}) => {
  return (
    <div className="w-full flex flex-wrap gap-2 md:flex-nowrap">
      <input
        type="text"
        onInput={handleTextChange}
        placeholder="Write something..."
        className="w-full rounded border px-4 py-2"
      />
      <button
        type="button"
        className={clsx("button", {
          "button bg-sky-800": align === "top",
        })}
        onClick={() => setAlign("top")}
        title="Align top"
      >
        <AlignStartHorizontal size={16} />
      </button>
      <button
        type="button"
        className={clsx("button", {
          "button bg-sky-800": align === "center",
        })}
        onClick={() => setAlign("center")}
        title="Align center"
      >
        <AlignCenterHorizontal size={16} />
      </button>
      <button
        type="button"
        className={clsx("button", {
          "button bg-sky-800": align === "bottom",
        })}
        onClick={() => setAlign("bottom")}
        title="Align bottom"
      >
        <AlignEndHorizontal size={16} />
      </button>
    </div>
  );
};

export default Editor;
