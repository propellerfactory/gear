import Colors from 'gear/colors'
import styled from 'styled-components'
import Base from '../Base'

const color = {
    text: Colors.deep,
    base: Colors.silver,
    hover: '#e7eaf0',
    focus: Colors.pink.down,
    down: Colors.granite
}

const DefaultButton = styled(Base)`
    color: ${color.text};
    background-color: ${color.base};
    :hover {
        background-color: ${color.hover};
    }
    :active {
        background-color: ${color.down};
    }
    :disabled {
        background-color: ${color.base};
    }
`

export default DefaultButton
