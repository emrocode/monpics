export default function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  option: string,
) {
  const words = text.split(" ");
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
    option === "top"
      ? lineHeight
      : option === "center"
        ? (y - totalHeight + lineHeight) / 2
        : y - totalHeight;

  // Draw text on canvas
  lines.forEach((line, i) => {
    ctx.fillText(line, x, startY + i * lineHeight);
  });
}
