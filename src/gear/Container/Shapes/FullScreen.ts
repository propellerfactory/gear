import styled from 'styled-components'
import Container from './Base'

const FullScreenContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`

export default FullScreenContainer
