import React from 'react'
import useWindowKeyEvent from './useWindowKeyEvent'

const keyMatch = [{ key: 'Escape' }]
const useWindowEscape = (onEscape?: () => void) => {
    const handleEscape = React.useCallback(() => {
        onEscape?.()
    }, [onEscape])
    useWindowKeyEvent(keyMatch, handleEscape)
}

export default useWindowEscape
