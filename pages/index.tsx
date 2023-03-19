import React from 'react'
import Head from 'next/head'

import Header from '@/components/header'
import Viewer from '@/components/viewer'
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
                <link rel="icon" href="/pixelssh.ico" />
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
