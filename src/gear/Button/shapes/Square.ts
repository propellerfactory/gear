import { css } from 'styled-components'
import { Size } from 'gear/size'
import { sizeStyles as rectangleSizeStyles } from './Rectangle'

const sizeStyles = {
    [Size.Small]: css`
        ${rectangleSizeStyles[Size.Small]};
        padding: 8px;
        width: 32px;
    `,
    [Size.Medium]: css`
        ${rectangleSizeStyles[Size.Medium]};
        padding: 12px;
        width: 40px;
    `,
    [Size.Large]: css`
        ${rectangleSizeStyles[Size.Large]};
        padding: 12px;
        width: 48px;
    `
}

export interface IProps {
    size: Size
}
const Rectangle = css<IProps>`
    ${props => sizeStyles[props.size]}
    font-weight: 500;
    border-radius: 9px;
`

export default Rectangle
