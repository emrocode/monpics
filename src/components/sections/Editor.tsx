import {
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
} from "lucide-react";
import clsx from "clsx";
import css from "../../styles/Editor.module.css";
import { EditorProps } from "../../types";

const EditorOptions = [
  {
    title: "Align Top",
    option: "top",
    icon: <AlignStartHorizontal size={16} />,
  },
  {
    title: "Align Center",
    option: "center",
    icon: <AlignCenterHorizontal size={16} />,
  },
  {
    title: "Align Bottom",
    option: "bottom",
    icon: <AlignEndHorizontal size={16} />,
  },
];

const Editor: React.FC<EditorProps> = ({
  handleTextChange,
  option,
  setOption,
}) => {
  return (
    <div className={css.editor}>
      <input
        type="text"
        onInput={handleTextChange}
        placeholder="Write something..."
        className={css.textarea}
      />
      <div className={css.toolbar}>
        {EditorOptions.map((item, index) => (
          <button
            type="button"
            className={clsx("button", {
              "button bg-sky-900": option === item.option,
            })}
            onClick={() => setOption(item.option)}
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
