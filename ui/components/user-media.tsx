import React, { useState, useEffect } from 'react'

export const userMedia = (constraints: object) => {
    const [media, setMedia] = useState<any>(null)

    const handleMedia = async () => {
        try {
            const data = await navigator.mediaDevices.getUserMedia(constraints)
            if (data) {
                return await setMedia(data)
            } else {
                return
            }
        } catch (err) {
            console.warn('err', err)
            return
        }
    }

    useEffect(() => {
        if (!media) {
            handleMedia()
        }
        return () => {
            true
        }
    }, [constraints, media])

    return { media }
}
