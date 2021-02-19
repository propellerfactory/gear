import React from 'react'
import * as Variants from './variants'
import { Size } from 'gear/size'
import { Width } from 'gear/width'
import { IInputProps } from './Component'
import { Theme } from 'gear/Theme'
import { ThemeContext } from 'gear'
import { Variant } from './variants'

export interface IProps extends Omit<IInputProps, 'size' | 'width' | 'variant'> {
    variant?: Variant
    size?: Size
    width?: Width
    innerRef?: React.RefObject<HTMLInputElement>
}
export const BaseInput = ({ variant, size = Size.Medium, width = Width.Content, innerRef, ...rest }: IProps) => {
    const currentTheme = ThemeContext.use()
    const currentVariant = variant !== undefined ? variant : currentTheme === Theme.Light ? Variant.Light : Variant.Dark
    switch (currentVariant) {
        case Variant.Light:
            return <Variants.Light ref={innerRef} size={size} width={width} {...rest} />
        case Variant.Dark:
            return <Variants.Dark ref={innerRef} size={size} width={width} {...rest} />
        case Variant.Clear:
            return <Variants.Clear ref={innerRef} size={size} width={width} {...rest} />
    }
}
BaseInput.Size = Size
BaseInput.Width = Width
BaseInput.Variant = Variant

export default BaseInput
