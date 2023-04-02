import React, { useState, useEffect } from 'react'

export const userMedia = (constraints: object) => {
    const [media, setMedia] = useState<any>(null)

    const handleMedia = async () => {
        try {
            const data = await navigator.mediaDevices.getUserMedia(constraints)
            if (data) {
                return await setMedia(data)
            } else {
                return await setMedia(null)
            }
        } catch (err) {
            console.warn('err', err)
            return await setMedia(null)
        }
    }

    useEffect(() => {
        if (!media) {
            handleMedia()
        }
        return () => true
    }, [constraints, media])

    return { media }
}
