import React from 'react'
import * as Variants from './variants'
import { Variant } from './variants'
import { Shape } from './shapes'
import { Size } from 'gear/size'
import { Width } from 'gear/width'
import Type from 'gear/Button/type'
import { Theme } from 'gear/Theme'
import { ThemeContext } from 'gear'

export interface IProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    theme?: Theme
    type?: Type
    size?: Size
    shape?: Shape
    width?: Width
    innerRef?: React.RefObject<HTMLButtonElement>
}
export const Button = ({
    theme,
    type = Type.Default,
    size = Size.Medium,
    width = Width.Content,
    shape = Shape.Rectangle,
    innerRef,
    ...rest
}: IProps) => {
    const currentTheme = ThemeContext.use(theme)
    const variant = Variants.getVariant(currentTheme, type)
    switch (variant) {
        case Variant.Clear:
            return <Variants.Clear size={size} width={width} shape={shape} ref={innerRef} {...rest} />
        case Variant.Dark:
            return <Variants.Dark size={size} width={width} shape={shape} ref={innerRef} {...rest} />
        case Variant.DarkNoBorder:
            return <Variants.DarkNoBorder size={size} width={width} shape={shape} ref={innerRef} {...rest} />
        case Variant.Primary:
            return <Variants.Primary size={size} width={width} shape={shape} ref={innerRef} {...rest} />
        case Variant.Default:
            return <Variants.Default size={size} width={width} shape={shape} ref={innerRef} {...rest} />
    }
}
Button.Size = Size
Button.Width = Width
Button.Type = Type
Button.Shape = Shape
export { Shape, Size, Type }

export default Button
