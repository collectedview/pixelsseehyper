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
                                src="/pixelssh.svg"
                                alt="pixelssh"
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
