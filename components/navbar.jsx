import Link from "next/link";
import NavLinks from "./NavLinks";
export default function Navbar() {
  return (
    <header className="header">
      <a href="#" className="logo">
        DEV
      </a>

      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
}
