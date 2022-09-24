import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <header className="header">
        {/*<a href="/" className="logo">*/}
        {/*  ClubRadio Hof*/}
        {/*</a>*/}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <Link href="/">
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link href="/showplan">
            <li>
              <a>Showplan</a>
            </li>
          </Link>
          <Link href="#work">
            <li>
              <a>Our Work</a>
            </li>
          </Link>
          <Link href="#work">
            <li>
              <a>Our Work</a>
            </li>
          </Link>
        </ul>
      </header>
    </>
  );
}
