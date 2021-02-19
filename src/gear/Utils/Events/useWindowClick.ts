import React from 'react'

const useWindowClick = (onClick?: (e: MouseEvent) => void) => {
    const handleClick = React.useCallback(
        (e: MouseEvent) => {
            onClick?.(e)
        },
        [onClick]
    )
    React.useEffect(() => {
        window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [handleClick])
}

export default useWindowClick
