import {useRouter} from 'next/router'
import exits from '../../data/exits'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function Exit(){
    const router = useRouter();
    const {slug} = router.query;
    const exit = exits.exits.find((a) => a.slug === slug)

    if (!exit){
        return (

            <main className={styles.main}>
                <Head>
                    <title>Exit nicht gefunden - Exits</title>
                </Head>
                <h1 className={styles.title}>
                    Exit nicht vorhanden
                </h1>
            </main>
        )
    }
    return (

        <main className={styles.main}>
            <Head>
                <title>{exit.name} - Exits</title>
            </Head>
            <h1 className={styles.title}>
                {exit.name}
            </h1>
            <p>
                {exit.description}
            </p>
        </main>
    )
}