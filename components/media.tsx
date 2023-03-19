import { useState, useEffect } from 'react'

export const stream = (constraints: object) => {
    const [data, setData] = useState<any>(null)

    const handleStream = async () => {
        try {
            const streamData = await navigator.mediaDevices.getUserMedia(
                constraints
            )
            if (streamData) {
                console.info('stream', streamData)
                return await setData(streamData)
            } else {
                return await setData(null)
            }
        } catch (err) {
            console.log('err', err)
            return await setData(null)
        }
    }

    useEffect(() => {
        if (!data) {
            handleStream()
        }
    }, [constraints, data])

    return { data }
}
