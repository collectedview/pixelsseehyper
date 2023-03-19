import { useRef } from 'react'

import { stream } from '@/components/media'

export default function Viewer() {
    const video = useRef()

    const { data } = stream({
        audio: true,
        video: {
            facingMode: 'user',
            width: { min: 1280, ideal: 1920, max: 3840 },
            height: { min: 720, ideal: 1080, max: 2160 },
            frameRate: { min: 30, ideal: 60, max: 120 },
        },
    })

    if (data) {
        video.current.srcObject = data
        video.current.play()
    }

    return (
        <>
            <div className="viewer">
                <video ref={video} autoPlay playsInline muted />
            </div>
        </>
    )
}
