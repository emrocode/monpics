import { useMonPics } from "../../hooks";
import css from "../../styles/Preview.module.css";

const Preview: React.FC = () => {
  const { canvasRef, file } = useMonPics();

  return (
    <div className={css.preview_container}>
      {file.url && (
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
          </div>
        </>
      )}
    </div>
  );
};

export default Preview;
