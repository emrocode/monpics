import React, { useRef, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import css from "../../styles/Editor.module.css";
import EditorToolbar from "../EditorToolbar";
import TextMenu from "../TextMenu";

const Editor: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useClickAway<HTMLDivElement>((e) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  });

  const editorToolbarProps = {
    css,
    buttonRef,
    isOpen,
    setIsOpen,
  };

  return (
    <div className={css.editor}>
      <EditorToolbar {...editorToolbarProps} />
      {isOpen && <TextMenu menuRef={menuRef} />}
    </div>
  );
};

export default Editor;
