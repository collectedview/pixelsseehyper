import React from 'react'
import Head from 'next/head'

import Header from '@/components/header'
import Privacy from '@/components/privacy'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="googlebot" content="noindex, nofollow" />
                <title>PixelsSeeHyper - privacy</title>
                <meta name="title" content="PixelsSeeHyper - privacy" />
                <meta name="application-name" content="PixelsSeeHyper" />
                <meta name="description" content="PixelsSeeHyper - privacy" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.pixels.sh/" />
                <meta property="og:title" content="PixelsSeeHyper - privacy" />
                <meta
                    property="og:description"
                    content="PixelsSeeHyper - privacy"
                />
                <meta
                    property="og:image"
                    content="https://www.pixels.sh/PixelsSeeHyper.png"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@PixelsSeeHyper" />
                <meta property="twitter:url" content="https://www.pixels.sh/" />
                <meta
                    property="twitter:title"
                    content="PixelsSeeHyper - privacy"
                />
                <meta
                    property="twitter:description"
                    content="PixelsSeeHyper - privacy"
                />
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
                    <Privacy />
                    <Footer />
                </div>
            </main>
        </>
    )
}
