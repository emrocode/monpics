import { Download } from "react-feather";
import type { PreviewProps } from "../types";

const Preview: React.FC<PreviewProps> = ({ file, canvasRef }) => {
  const handleDownload = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    const date = new Date();
    const fileDate = date.toLocaleString("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    document.body.appendChild(a);
    a.href = url;
    a.download = `monpics_${fileDate}_${canvas.width}.png`; // Set the filename
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mt-8">
      <div className="relative max-w-[400px] bg-neutral-50">
        {!file && (
          <span className="absolute inset-0 flex select-none items-center justify-center font-medium text-neutral-300">
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
      <div className="mt-4 flex gap-x-2">
        {file && (
          <button
            type="button"
            onClick={handleDownload}
            className="up-button bg-green-600"
          >
            <Download size={16} />
            <span>download</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Preview;
