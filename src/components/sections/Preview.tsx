import css from "../../styles/Preview.module.css";
import type { PreviewProps } from "../../types";

const Preview: React.FC<PreviewProps> = ({ file, canvasRef }) => {
  return (
    <div className={css.preview_container}>
      {file && (
        <>
          <div className={css.preview_canvas__container}>
            <div className={css.preview_canvas}>
              <canvas
                ref={canvasRef}
                width={800}
                height={800}
                className={css.canvas}
              />
            </div>
            <div className={css.sidebar}>
              <span className={css.sidebar_info}>800 x 800 px</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Preview;
