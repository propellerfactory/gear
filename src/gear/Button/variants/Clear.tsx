import Colors from 'gear/colors'
import styled from 'styled-components'
import Base from '../Base'

const color = {
    text: Colors.deep,
    base: 'transparent',
    hover: '#e7eaf0',
    down: Colors.granite
}

const ClearButton = styled(Base)`
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

export default ClearButton
