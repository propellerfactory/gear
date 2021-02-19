import Colors from 'gear/colors'
import styled from 'styled-components'
import InputComponent, { invalidCss } from '../Component'

const color = {
    text: Colors.deep,
    background: Colors.white,
    border: Colors.granite,
    focus: Colors.pink.down,
    selection: Colors.pink.default,
    placeholder: Colors.dark.down,
    readonly: Colors.moody
}

const DefaultInput = styled(InputComponent)`
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
    }
    ::selection {
        background: ${color.selection};
    }
    :read-only {
        color: ${color.readonly};
    }
    ${props => props.invalid && invalidCss}
`

export default DefaultInput
