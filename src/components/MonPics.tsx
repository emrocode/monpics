import { Editor, Preview, UploadFile } from "./sections";
import clsx from "clsx";
import css from "../styles/MonPics.module.css";
import { useMonPics } from "../hooks";

export default function MonPics() {
  const { file } = useMonPics();

  return (
    <section className={clsx("container", css.container)}>
      {!file.url ? (
        <UploadFile />
      ) : (
        <div className={css.wrapper}>
          <Editor />
          <Preview />
        </div>
      )}
    </section>
  );
}
