import { NavLink, useLocation } from "react-router-dom";
import Logo from "/monpics.png";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/monpics/";

  return (
    <header className="border-b">
      <nav className="container flex h-16 items-center justify-between">
        <NavLink
          to="/monpics/"
          className="flex items-center gap-x-2"
          reloadDocument={isHome}
        >
          <img decoding="async" src={Logo} alt="MonPics Logo" />
        </NavLink>
      </nav>
    </header>
  );
}
