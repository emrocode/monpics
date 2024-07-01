import { useDropzone } from "react-dropzone";
import { Plus } from "lucide-react";
import Gallery from "./Gallery";
import clsx from "clsx";
import css from "../../styles/Upload.module.css";
import type { UploadProps } from "../../types";

const Upload: React.FC<UploadProps> = ({
  setLoading,
  loading,
  handleClick,
  handleChange,
}) => {
  const onDrop = handleChange;
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".gif", ".svg", ".webp"],
    },
    multiple: false,
    noClick: true,
    noKeyboard: true,
    onFileDialogOpen: () => setLoading(true),
    onFileDialogCancel: () => setLoading(false),
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
            <span>{loading ? "waiting..." : "open image"}</span>
          </button>
        </div>
      </div>
      <Gallery handleClick={handleClick} />
    </div>
  );
};

export default Upload;
