import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Head>
                <title>pixelssh</title>
                <meta name="description" content="pixelssh" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/pixelssh.ico" />
            </Head>
            <main>
                <div className="container">
                    <Image
                        className="logo"
                        src="/pixelssh.svg"
                        alt="pixelssh"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
            </main>
        </>
    )
}
