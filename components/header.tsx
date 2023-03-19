import React from 'react'

import Image from 'next/image'

export default function Header() {
    return (
        <>
            <div className="header">
                <ul>
                    <li>
                        <Image
                            className="logo"
                            src="/pixelssh.svg"
                            alt="pixelssh"
                            width={90}
                            height={90}
                            priority
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}
