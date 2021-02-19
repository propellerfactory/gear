import React from 'react'
import styled from 'styled-components'
import * as Layout from 'gear/Layout'

const ScrimComponent = styled(Layout.Absolute.Full)`
    background: rgba(3, 7, 17, 0.5);
    z-index: -1;
`

interface IProps extends Omit<React.ObjectHTMLAttributes<HTMLDivElement>, 'onClick'> {
    onClick?: (e: React.MouseEvent) => void
}
const Scrim = ({ onClick, ...rest }: IProps) => {
    const handleClick = React.useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            onClick?.(e)
        },
        [onClick]
    )
    return <ScrimComponent {...rest} onClick={handleClick} />
}

export default Scrim
