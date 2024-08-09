import { useMonPics } from "../hooks";

export default function TextArea({ className }: { className: string }) {
  const { file, handleTextChange } = useMonPics();

  return (
    <input
      type="text"
      name="text"
      value={file.text}
      onInput={handleTextChange}
      placeholder="Write something..."
      className={className}
    />
  );
}
