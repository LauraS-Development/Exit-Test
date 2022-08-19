import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Exits from "../components/Exits";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Exits />
      </main>
    </div>
  );
}
