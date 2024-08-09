import type { FileProps } from "../types";

export default function drawTextProp(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  file: FileProps,
  maxWidth: number,
) {
  const words = file.text.split(" ");
  const lineHeight = ctx.measureText("M").width * 1.5; // Add line height
  const lines = [];
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine + words[i] + " ";
    const testWidth = ctx.measureText(testLine).width;
    if (testWidth > maxWidth && i > 0) {
      lines.push(currentLine);
      currentLine = words[i] + " ";
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);

  // All text height
  const totalHeight = lines.length * lineHeight;

  // Position
  let startY: number;
  startY =
    file.option.position === "top"
      ? lineHeight
      : file.option.position === "center"
        ? (y - totalHeight + lineHeight) / 2
        : y - totalHeight;

  // Text styles
  // TODO: Customize shadow
  const shadowBase = 12;
  const fontFallback = "Arial, system-ui, -apple-system, sans-serif";

  ctx.fillStyle = file.option.color;
  ctx.font = `${file.option.font.weight} ${file.option.font.size}pt ${file.option.font.family}, ${fontFallback}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Shadow
  ctx.shadowColor = "black";
  ctx.shadowBlur = shadowBase * 2;
  ctx.shadowOffsetX = shadowBase;
  ctx.shadowOffsetY = shadowBase;

  // Draw text on canvas
  lines.forEach((line, i) => {
    ctx.fillText(line, x, startY + i * lineHeight);
  });
}
