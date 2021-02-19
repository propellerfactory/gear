import styled from 'styled-components'
import { Size } from 'gear/size'
import { Width } from 'gear/width'
import { Shape, getShapeCss } from './shapes'

export interface IBaseButtonProps {
    size: Size
    shape: Shape
    width: Width
}
const BaseButton = styled.button<IBaseButtonProps>`
    border: none;
    outline: none;
    user-select: none;
    ${props => getShapeCss(props.shape)}
    display: flex;
    align-items: center;
    justify-content: flex-start;
    :disabled {
        opacity: 0.3;
    }
`

export default BaseButton
