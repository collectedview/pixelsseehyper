import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
                <div className="viewer">
                    <Image
                        className="logo"
                        src="/pixelssh.svg"
                        alt="pixelssh"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                <div className="footer">
                    <ul>
                        <li>
                            <Link
                                href="mailto:wave@pixels.sh"
                                target="_self"
                                aria-label="Send a wave"
                                type="link"
                            >
                                Send a wave
                            </Link>
                        </li>
                        <li>
                            <span>
                                &#x24B8; {new Date().getFullYear()} pixelssh
                            </span>
                        </li>
                    </ul>
                </div>
                </div>
            </main>
        </>
    )
}
