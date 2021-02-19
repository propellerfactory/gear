import { css } from 'styled-components'
import { Size } from 'gear/size'

const sizeStyles = {
    [Size.Small]: css`
        padding: 8px;
        font-size: 12px;
        height: 32px;
        width: 32px;
        border-radius: 16px;
    `,
    [Size.Medium]: css`
        padding: 12px;
        font-size: 13px;
        height: 48px;
        width: 48px;
        border-radius: 24px;
    `,
    [Size.Large]: css`
        padding: 24px;
        font-size: 16px;
        height: 72px;
        width: 72px;
        border-radius: 36px;
    `
}

interface IProps {
    size: Size
}
const Circle = css<IProps>`
    font-weight: 400;
    ${props => sizeStyles[props.size]}
`

export default Circle
