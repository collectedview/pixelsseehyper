import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div className="header">
                <ul>
                    <li>
                        <Link href="/">
                            <Image
                                className="logo"
                                src="/PixelsSeeHyper.svg"
                                alt="PixelsSeeHyper"
                                width={90}
                                height={90}
                                priority
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
