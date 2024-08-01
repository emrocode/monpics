import css from "../styles/Footer.module.css";
import clsx from "clsx";
import pkg from "../../package.json";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className={css.footer}>
      <div className={clsx("container", css.footer_nav)}>
        <p>
          MonPics v{pkg.version} &copy; {currentYear} &middot; Deployed on&nbsp;
          <Link
            to="https://vercel.com"
            target="_blank"
            className={css.footer_link}
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
}
