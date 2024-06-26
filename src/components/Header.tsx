import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import css from "../styles/Header.module.css";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={css.nav_brand} reloadDocument={isHome}>
          <Logo />
          <span>MonPics</span>
        </NavLink>
      </nav>
    </header>
  );
}
