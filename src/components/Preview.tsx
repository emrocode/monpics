import { Download } from "lucide-react";
import type { PreviewProps } from "../types";

const Preview: React.FC<PreviewProps> = ({ file, canvasRef }) => {
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
    <div className="mt-8">
      {file && (
        <>
          <div className="relative max-w-[360px] bg-neutral-50">
            <canvas
              ref={canvasRef}
              width={800}
              height={800}
              className="block h-full w-full"
            />
          </div>
          <div className="mt-4 flex items-center gap-x-1">
            <button
              type="button"
              onClick={handleDownload}
              className="button bg-sky-600"
            >
              <Download size={16} />
              <span>download</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Preview;
