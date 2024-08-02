import { useContext } from "react";
import { EditorContext } from "../contexts";

const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within a provider");
  }
  return context;
};

export default useEditor;
