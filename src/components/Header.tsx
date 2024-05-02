import { NavLink, useLocation } from "react-router-dom";
// import clsx from "clsx";
import css from "../styles/Header.module.css";
import Logo from "./Logo";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={css.nav_brand} reloadDocument={isHome}>
          <Logo width={28} height={28} bgColor="#27374D" fillColor="#DDE6ED" />
          <span>MonPics</span>
        </NavLink>
      </nav>
    </header>
  );
}
