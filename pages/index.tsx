import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>pixelssh</title>
        <meta name="description" content="pixelssh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <div >
            <Image
              src="/pixelssh.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
      </main>
    </>
  )
}
