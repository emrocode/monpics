import { Plus } from "lucide-react";
import type { UploadProps } from "../../types";
import Gallery from "./Gallery";

const Upload: React.FC<UploadProps> = ({
  loading,
  setLoading,
  handleClick,
  handleChange,
}) => {
  return (
    <div className="flex flex-col gap-y-8">
      <label>
        <div className="button rounded-full" onClick={() => setLoading(true)}>
          <Plus size={16} />
          <span>{loading ? "waiting..." : "add image"}</span>
        </div>
        <input type="file" accept="image/*" onChange={handleChange} />
      </label>
      <Gallery handleClick={handleClick} />
    </div>
  );
};

export default Upload;
