import Colors from 'gear/colors'
import styled from 'styled-components'
import InputComponent, { invalidCss } from '../Component'

const color = {
    text: Colors.silver,
    border: Colors.granite,
    background: Colors.shadow,
    focus: Colors.pink.down,
    selection: Colors.pink.default,
    placeholder: Colors.gray,
    readonly: Colors.moody
}

const DarkInput = styled(InputComponent)`
    color: ${color.text};
    border: 1px solid ${color.border};
    background-color: transparent;
    :focus {
        background-color: ${color.background};
        border: 1px solid transparent;
        box-shadow: 0px 0px 0px 2px ${color.focus};
    }
    ::placeholder {
        color: ${color.placeholder};
        opacity: 1;
    }
    ::selection {
        background: ${color.selection};
    }
    :read-only {
        color: ${color.readonly};
    }
    ${props => props.invalid && invalidCss}
`

export default DarkInput
