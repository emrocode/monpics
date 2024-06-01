import clsx from "clsx";
import {
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
} from "lucide-react";
import { EditorProps } from "../types";

const EditorOptions = [
  {
    title: "Align Top",
    alignment: "top",
    icon: <AlignStartHorizontal size={16} />,
  },
  {
    title: "Align Center",
    alignment: "center",
    icon: <AlignCenterHorizontal size={16} />,
  },
  {
    title: "Align Bottom",
    alignment: "bottom",
    icon: <AlignEndHorizontal size={16} />,
  },
];

const Editor: React.FC<EditorProps> = ({
  handleTextChange,
  align,
  setAlign,
}) => {
  return (
    <div className="flex w-full flex-wrap gap-2 md:flex-nowrap">
      <input
        type="text"
        onInput={handleTextChange}
        placeholder="Write something..."
        className="w-full rounded border px-4 py-2"
      />
      <div className="flex gap-1">
        {EditorOptions.map((option, index) => (
          <button
            type="button"
            className={clsx("button", {
              "button bg-sky-600": align === option.alignment,
            })}
            onClick={() => setAlign(option.alignment)}
            title={option.title}
            key={index}
          >
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Editor;
