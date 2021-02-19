import React from 'react'

type KeyMatch = {
    key: string
    altKey?: boolean
    shiftKey?: boolean
    metaKey?: boolean
    ctrlKey?: boolean
}

const doesModifierMatch = (eventModifier: boolean, keyMatchModifier: boolean | undefined) => {
    return keyMatchModifier === undefined || eventModifier === keyMatchModifier
}
const doesMatch = (e: KeyboardEvent, keyMatch: KeyMatch) => {
    if (e.key !== keyMatch.key) {
        return false
    }
    if (!doesModifierMatch(e.altKey, keyMatch.altKey)) {
        return false
    }
    if (!doesModifierMatch(e.shiftKey, keyMatch.shiftKey)) {
        return false
    }
    if (!doesModifierMatch(e.metaKey, keyMatch.metaKey)) {
        return false
    }
    if (!doesModifierMatch(e.ctrlKey, keyMatch.ctrlKey)) {
        return false
    }
    return true
}

const useWindowKeyEvent = (keyMatches: KeyMatch[], onEvent: (e: KeyboardEvent) => void) => {
    const handleKeyUp = React.useCallback(
        (e: KeyboardEvent) => {
            if (keyMatches.some(keyMatch => doesMatch(e, keyMatch))) {
                onEvent(e)
            }
        },
        [keyMatches, onEvent]
    )
    React.useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [handleKeyUp, onEvent])
}

export default useWindowKeyEvent
