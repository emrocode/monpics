import clsx from "clsx";
import {
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
} from "lucide-react";
import { EditorProps } from "../../types";

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
  option,
  setOption,
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
        {EditorOptions.map((item, index) => (
          <button
            type="button"
            className={clsx("button", {
              "button bg-sky-900": option === item.alignment,
            })}
            onClick={() => setOption(item.alignment)}
            title={item.title}
            key={index}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Editor;
