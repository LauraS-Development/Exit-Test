import Head from 'next/head'
export default function Lo({children}){
    return (
        <div>
            <Head>
                <title>Exits</title>
            </Head>
            <div>Navigation</div>
            {children}
            <div>Footer</div>
        </div>
    )
}