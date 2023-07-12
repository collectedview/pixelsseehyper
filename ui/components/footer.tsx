import React from 'react'

import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <ul>
                    <li>
                        <Link
                            href="/privacy"
                            target="_self"
                            aria-label="Send a wave"
                            type="link"
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <span>
                            &#x24B8; {new Date().getFullYear()} PixelsSeeHyper
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}
