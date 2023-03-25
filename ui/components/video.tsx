import React, { useRef, useEffect } from 'react'

type PropsType = {
    srcObject: MediaStream
}

export default function Video({ srcObject }: PropsType) {
    const video = useRef<HTMLVideoElement>(null)

    const handleVideo = async () => {
        try {
            if (video?.['current']) {
                video.current.srcObject = srcObject
                return
            } else {
                return null
            }
        } catch (err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        if (srcObject) {
            handleVideo()
        }
        return () => {
            true
        }
    }, [video, srcObject])

    return <video ref={video} autoPlay playsInline muted controls />
}
