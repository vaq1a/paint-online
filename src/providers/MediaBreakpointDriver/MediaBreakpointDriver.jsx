import { BREAKPOINTS, currentBreakpointIndex } from '@pwa-onilab/ui/components/elements/MediaBreakpoint'
import { TIME_DELAY_ON_BREAKPOINT_CHECK } from '@pwa-onilab/ui/constants/breakpoints'
import { useLayoutEffect, useRef } from 'react'

const MediaBreakpointDriver = (
    {
        children
    },
) => {
    const ref = useRef(null)

    useLayoutEffect(() => {
        const breakpointHandler = () => {
            const newBreakpointIndex = (
                BREAKPOINTS
                    .findIndex(([, width]) => window.innerWidth >= width)
            )

            if (newBreakpointIndex !== currentBreakpointIndex()) {
                currentBreakpointIndex(newBreakpointIndex)
            }
        }

        breakpointHandler()

        const handler = () => {
            clearTimeout(ref.current)

            ref.current = setTimeout(breakpointHandler, TIME_DELAY_ON_BREAKPOINT_CHECK)
        }
        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default MediaBreakpointDriver
