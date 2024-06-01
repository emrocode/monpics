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
      <div className="relative max-w-[360px] bg-neutral-50">
        {!file && (
          <span className="absolute inset-0 flex select-none items-center justify-center text-neutral-300">
            800x800
          </span>
        )}
        <canvas
          ref={canvasRef}
          width={800}
          height={800}
          className="block h-full w-full"
        />
      </div>
      <div className="mt-4 flex items-center gap-x-1">
        {file && (
          <>
            <button
              type="button"
              onClick={handleDownload}
              className="button bg-sky-600"
            >
              <Download size={16} />
              <span>download</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Preview;
