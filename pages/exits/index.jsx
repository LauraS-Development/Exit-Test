import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Exits from '../../components/Exits'


export default function Home() {
    return (
        <div className={styles.container}>
           <main className={styles.main}>
                <h1 className={styles.title}>
                    Exit &Uuml;bersicht
                </h1>
                <hr />
                <Exits />
            </main>
        </div>
    )
}
