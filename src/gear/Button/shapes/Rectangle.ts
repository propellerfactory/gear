import { css } from 'styled-components'
import { Size } from 'gear/size'
import { Width } from 'gear/width'

const widthStyles = {
    [Width.Content]: css``,
    [Width.Grow]: css`
        flex: 1;
        width: 100%;
    `
}

export const sizeStyles = {
    [Size.Small]: css`
        padding: 8px 12px;
        font-size: 12px;
        height: 32px;
    `,
    [Size.Medium]: css`
        padding: 12px 16px;
        font-size: 13px;
        height: 40px;
    `,
    [Size.Large]: css`
        padding: 12px 16px;
        font-size: 16px;
        height: 48px;
    `
}

export interface IProps {
    size: Size
    width: Width
}
const Rectangle = css<IProps>`
    ${props => sizeStyles[props.size]}
    ${props => widthStyles[props.width]}
    font-weight: 500;
    border-radius: 9px;
`

export default Rectangle
