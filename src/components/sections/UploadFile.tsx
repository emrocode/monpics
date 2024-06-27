import { Plus } from "lucide-react";
import css from "../../styles/Upload.module.css";
import Gallery from "./Gallery";
import type { UploadProps } from "../../types";

const Upload: React.FC<UploadProps> = ({
  loading,
  setLoading,
  handleClick,
  handleChange,
}) => {
  return (
    <div className={css.container}>
      <label>
        <div className={css.upload_zone} onClick={() => setLoading(true)}>
          <Plus size={16} />
          <span>{loading ? "waiting..." : "open image"}</span>
        </div>
        <input type="file" accept="image/*" onChange={handleChange} />
      </label>
      <Gallery handleClick={handleClick} />
    </div>
  );
};

export default Upload;
