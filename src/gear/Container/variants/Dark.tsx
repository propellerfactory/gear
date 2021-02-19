import Colors from 'gear/colors'
import { css } from 'styled-components'

const DarkContainer = css`
    background-color: ${Colors.shadow};
    color: ${Colors.white};
    border: 1px solid ${Colors.alpha(Colors.white, 0.18)};
`

export default DarkContainer
