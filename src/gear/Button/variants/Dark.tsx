import Colors from 'gear/colors'
import styled from 'styled-components'
import Base from '../Base'

const color = {
    text: Colors.white,
    base: Colors.shadow,
    hover: Colors.dark.hover,
    down: Colors.dark.down,
    disabled: Colors.shadow
}

const PrimaryButton = styled(Base)`
    color: ${color.text};
    background-color: ${color.base};
    border: 1px solid rgba(255, 255, 255, 0.08);
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
