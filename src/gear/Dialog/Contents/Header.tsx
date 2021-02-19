import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
    font-weight: 500;
    font-size: 19px;
`

const Description = styled.div`
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
`

const Container = styled.div`
    padding: 24px;
`

interface IProps {
    title: string
    description?: string
    id?: string
}
const Header = ({ title, description, id }: IProps) => (
    <Container>
        <Title id={`${id}_title`}>{title}</Title>
        <div style={{ height: 12 }} />
        {description && <Description id={`${id}_description`}>{description}</Description>}
    </Container>
)
export default Header
