import React from 'react'
import Head from 'next/head'

import Header from '@/components/header'
import Viewer from '@/components/viewer'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>PixelsSeeHyper</title>
                <meta name="title" content="PixelsSeeHyper" />
                <meta name="application-name" content="PixelsSeeHyper" />
                <meta name="description" content="PixelsSeeHyper" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.pixels.sh/" />
                <meta property="og:title" content="PixelsSeeHyper" />
                <meta property="og:description" content="PixelsSeeHyper" />
                <meta
                    property="og:image"
                    content="https://www.pixels.sh/PixelsSeeHyper.png"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@PixelsSeeHyper" />
                <meta property="twitter:url" content="https://www.pixels.sh/" />
                <meta property="twitter:title" content="PixelsSeeHyper" />
                <meta property="twitter:description" content="PixelsSeeHyper" />
                <meta
                    property="twitter:image"
                    content="https://www.pixels.sh/PixelsSeeHyper.png"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/PixelsSeeHyper.ico" />
            </Head>
            <main>
                <div className="container">
                    <Header />
                    <Viewer />
                    <Footer />
                </div>
            </main>
        </>
    )
}
