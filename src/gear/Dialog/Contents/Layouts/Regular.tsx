import Header from 'gear/Dialog/Contents/Header'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const BodyContainer = styled.div`
    padding: 24px;
    padding-top: 0;
`

const ActionsContainer = styled.div`
    padding: 0px 24px;
`

interface IProps {
    title: string
    description?: string
    children: React.ReactNode
    actions?: React.ReactNode
    width?: number | string
    maxWidth?: number | string
    id?: string
}
const RegularContents = ({ title, description, children, width, maxWidth, actions, id, ...rest }: IProps) => {
    return (
        <Container {...rest} style={{ width, maxWidth }} id={id}>
            <Header id={id} title={title} description={description} />
            <BodyContainer id={`${id}_body`}>{children}</BodyContainer>
            {actions && <ActionsContainer>{actions}</ActionsContainer>}
        </Container>
    )
}

export default RegularContents
