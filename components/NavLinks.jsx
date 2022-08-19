import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link href="/">
        <li>
          <a className="">Home</a>
        </li>
      </Link>
      <Link href="/exits">
        <li>
          <a className="">Exits</a>
        </li>
      </Link>
      <Link href="/impressum">
        <li>
          <a className="">Impressum</a>
        </li>
      </Link>
      <Link href="/datenschutz">
        <li>
          <a className="">Datenschutz</a>
        </li>
      </Link>
    </>
  );
}
