import { useDropzone } from "react-dropzone";
import { useMonPics } from "../../hooks";
import { Plus } from "lucide-react";
import Gallery from "./Gallery";
import clsx from "clsx";
import css from "../../styles/Upload.module.css";

const Upload: React.FC = () => {
  const { file, handleClick, handleChange } = useMonPics();

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop: handleChange,
    accept: {
      "image/*": [".jpeg", ".png", ".gif", ".svg", ".webp"],
    },
    multiple: false,
    noClick: true,
    noKeyboard: true,
    onFileDialogOpen: () => (file.loading = true),
    onFileDialogCancel: () => (file.loading = false),
  });

  return (
    <div className={css.container}>
      <div className={css.upload_zone} {...getRootProps()}>
        <div
          className={clsx(
            isDragActive ? [css.upload, css.active] : [css.upload],
          )}
        >
          <div className={css.input_container}>
            <input {...getInputProps()} />
            <span>Drag 'n' drop a image here</span>
          </div>
          <button type="button" className={css.button} onClick={open}>
            <Plus size={16} />
            <span>{file.loading ? "waiting..." : "open image"}</span>
          </button>
        </div>
      </div>
      <Gallery handleClick={handleClick} />
    </div>
  );
};

export default Upload;
