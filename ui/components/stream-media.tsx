import { useState, useEffect } from 'react'

export const StreamMedia = (constraints: object) => {
    const [media, setMedia] = useState<any>(null)

    const handleMedia = async () => {
        try {
            const data = await navigator.mediaDevices.getUserMedia(constraints)
            if (data) {
                return await setMedia(data)
            } else {
                return null
            }
        } catch (err) {
            console.warn('err', err)
            return null
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
