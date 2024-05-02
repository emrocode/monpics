import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/monpics/";

  return (
    <header className="border-b">
      <nav className="container flex h-16 items-center justify-between">
        <NavLink
          to="/monpics/"
          className="text-xl font-bold"
          reloadDocument={isHome}
        >
          MonPics
        </NavLink>
      </nav>
    </header>
  );
}
