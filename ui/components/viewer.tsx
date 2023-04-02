import React from 'react'

import { StreamMedia } from '@/components/stream-media'
import Video from '@/components/video'

export default function Viewer() {
    const { media } = StreamMedia({
        audio: true,
        video: {
            facingMode: 'user',
            width: { min: 1280, ideal: 1920, max: 3840 },
            height: { min: 720, ideal: 1080, max: 2160 },
            frameRate: { min: 30, ideal: 60, max: 120 },
        },
    })

    return (
        <>
            <div className="viewer">
                <Video srcObject={media} />
            </div>
        </>
    )
}
