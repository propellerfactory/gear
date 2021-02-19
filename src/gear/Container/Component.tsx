import React from 'react'
import { Size } from 'gear/size'
import ThemeContext, { Theme } from 'gear/Theme'
import styled from 'styled-components'
import { getVariantCss, Variant } from './variants'

const getBorderRadius = (size: Size) => {
    switch (size) {
        case Size.Small:
            return '9px'
        case Size.Medium:
            return '12px'
        case Size.Large:
            return '16px'
    }
}

interface IProps {
    variant: Variant
    size: Size
}
const Container = styled.div<IProps>`
    overflow-y: auto;

    ${props => getVariantCss(props.variant)}
    border-radius: ${props => getBorderRadius(props.size)};
`

interface IThemedProps extends React.ObjectHTMLAttributes<HTMLDivElement> {
    variant?: Variant
    size: Size
}
const ThemedContainer = ({ variant, ...rest }: IThemedProps) => {
    const theme = ThemeContext.use()
    const currentVariant = variant ?? theme === Theme.Light ? Variant.Light : Variant.Dark
    return <Container variant={currentVariant} {...rest} />
}

export default ThemedContainer
