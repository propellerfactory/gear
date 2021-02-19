import React from 'react'
import styled from 'styled-components'
import * as Layout from 'gear/Layout'
import ThemeContext, { Theme } from 'gear/Theme'
import { getVariantColors, Variant } from './Variants'

const TransitionDuration = '0.3s'

const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
`

const Thumb = styled.span<{ variant: Variant }>`
    ${Layout.css.FullAbsolute}
    background-color: ${props => getVariantColors(props.variant).background.off};
    transition: background-color ${TransitionDuration} ease;
    border-radius: 12px;
    pointer-events: none;
    :before {
        position: absolute;
        content: '';
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        border-radius: 10px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.04), 1px 1px 0px rgba(0, 0, 0, 0.12);
        background-color: ${props => getVariantColors(props.variant).thumb};
        transition: background-color ${TransitionDuration} ease, transform ${TransitionDuration} ease;
    }
`

const Checkbox = styled.input<{ variant: Variant }>`
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    :checked + ${Thumb} {
        background-color: ${props => getVariantColors(props.variant).background.on};
    }
    :focus + ${Thumb} {
        box-shadow: 0px 0px 0px 2px ${props => getVariantColors(props.variant).focus};
    }
    :checked + ${Thumb}:before {
        transform: translateX(16px);
    }
    :disabled + ${Thumb} {
        opacity: 0.3;
    }
`

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    variant?: Variant
    onChange: (value: boolean) => void
}
const BaseToggle = ({ onChange, variant, ...rest }: IProps) => {
    const theme = ThemeContext.use()
    const currentVariant = variant ?? theme === Theme.Light ? Variant.Light : Variant.Dark
    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.checked)
        },
        [onChange]
    )
    return (
        <Container>
            <Checkbox variant={currentVariant} type="checkbox" {...rest} onChange={handleChange} />
            <Thumb variant={currentVariant} />
        </Container>
    )
}

export default BaseToggle
