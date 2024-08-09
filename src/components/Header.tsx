import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "../styles/Header.module.css";
import Logo from "./Logo";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const logoProps = {
    width: 32,
    height: 32,
    bgColor: "#27374d",
    fillColor: "#dde6ed",
  };

  return (
    <header className={css.header}>
      <nav className={clsx("container", css.nav)}>
        <NavLink to="/" className={css.nav_brand} reloadDocument={isHome}>
          <Logo {...logoProps} />
          <span>MonPics</span>
        </NavLink>
      </nav>
    </header>
  );
}
