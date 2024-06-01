import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/monpics/";

  return (
    <header className="border-b">
      <nav className="container flex h-16 items-center justify-between">
        <NavLink
          to="/monpics/"
          className="flex items-center gap-x-2 text-xl font-bold"
          reloadDocument={isHome}
        >
          <span>MonPics</span>
          <span className="rounded-full bg-sky-500 px-2 py-1 text-xs uppercase text-white">
            beta
          </span>
        </NavLink>
      </nav>
    </header>
  );
}
