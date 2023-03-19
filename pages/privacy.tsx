import React from 'react'
import Head from 'next/head'

import Header from '@/components/header'
import Privacy from '@/components/privacy'
import Footer from '@/components/footer'

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
                <meta name="robots" content="noindex, nofollow" />
                <meta name="googlebot" content="noindex, nofollow" />
                <link rel="icon" href="/pixelssh.ico" />
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
