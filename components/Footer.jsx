import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <p> &copy; by Milawe.dev </p>
        <Link href="/impressum">
          <a className="">Impressum</a>
        </Link>
        &nbsp;|&nbsp;
        <Link href="/datenschutz">
          <a className="">Datenschutz</a>
        </Link>
      </div>
    </>
  );
}
