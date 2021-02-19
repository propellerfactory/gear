import Colors from 'gear/colors'
import styled from 'styled-components'
import Base from '../Base'

const color = {
    text: Colors.deep,
    base: Colors.pink.default,
    hover: '#dbadff',
    down: '#e08efa',
    disabled: Colors.granite
}

const PrimaryButton = styled(Base)`
    color: ${color.text};
    background-color: ${color.base};
    :hover {
        background-color: ${color.hover};
    }
    :active {
        background-color: ${color.down};
    }
    :disabled {
        background-color: ${color.disabled};
    }
`

export default PrimaryButton
