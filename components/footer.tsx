import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <ul>
                    <li>
                        <Link
                            href="mailto:wave@pixels.sh"
                            target="_self"
                            aria-label="Send a wave"
                            type="link"
                        >
                            Send a Wave
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            target="_self"
                            aria-label="Send a wave"
                            type="link"
                        >
                            Return to Home
                        </Link>
                    </li>
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
                            &#x24B8; {new Date().getFullYear()} pixelssh
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}
