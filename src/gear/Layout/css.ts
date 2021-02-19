import { css } from 'styled-components'

export const FullAbsolute = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const AbsoluteCenter = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const FlexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
