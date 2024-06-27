import {
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
  Download,
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
  canvasRef,
  option,
  setOption,
}) => {
  const handleDownload = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    document.body.appendChild(a);
    a.href = url;
    a.download = `monpics_${day}${month}${year}_${canvas.width}.png`; // Set the filename
    a.click();
    document.body.removeChild(a);
  };

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
            className={clsx(css.button, {
              [css.active]: option === item.option,
            })}
            onClick={() => setOption(item.option)}
            title={item.title}
            key={index}
          >
            {item.icon}
          </button>
        ))}
      </div>
      <div className={css.toolbar}>
        <button type="button" className={css.button} onClick={handleDownload}>
          <Download size={16} />
          <span>download</span>
        </button>
      </div>
    </div>
  );
};

export default Editor;
