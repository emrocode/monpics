export default function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
) {
  const words = text.split(" ");
  const lineHeight = ctx.measureText("M").width * 1.25; // Add line height
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

  // Position text at the bottom center
  const startY = y - totalHeight + lineHeight;

  // Draw text on canvas
  lines.forEach((line, index) => {
    ctx.fillText(line, x, startY + index * lineHeight);
  });
}
