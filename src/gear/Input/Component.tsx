import React from 'react'
import styled, { css } from 'styled-components'
import { Size } from 'gear/size'
import { Width } from 'gear/width'
import Colors from 'gear/colors'

const sizeStyles = {
    [Size.Small]: css`
        padding: 0px 12px;
        font-size: 12px;
        height: 32px;
        line-height: 32px;
    `,
    [Size.Medium]: css`
        padding: 0px 16px;
        font-size: 13px;
        height: 40px;
        line-height: 40px;
    `,
    [Size.Large]: css`
        padding: 0px 16px;
        font-size: 16px;
        height: 48px;
        line-height: 48px;
    `
}

const widthStyles = {
    [Width.Content]: css``,
    [Width.Grow]: css`
        flex: 1;
        width: 100%;
    `
}

export const invalidCss = css`
    box-shadow: 0px 0px 0px 2px ${Colors.red};
    border: 1px solid transparent;
    :focus {
        box-shadow: 0px 0px 0px 2px ${Colors.red};
    }
`

interface IProps {
    sizeOpt: Size
    width: Width
    invalid?: boolean
    ellipsize?: boolean
    css?: any
    ref?: React.RefObject<HTMLInputElement>
}
const Input = styled.input<IProps>`
    outline: none;
    border: none;
    ${props => sizeStyles[props.sizeOpt]}
    ${props => widthStyles[props.width]}
    ${props => props.ellipsize && `text-overflow: ellipsis;`}
    ${props => props.css}
    border-radius: 9px;
    font-weight: 400;
    box-sizing: border-box;
    :disabled {
        opacity: 0.3;
    }
`

export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> {
    onChange?: (value: string) => void
    onIntermediate?: (value: string) => void
    onEnter?: () => void
    onCancel?: () => void
    // input types
    size: Size
    width: Width
    value: string | undefined
    // custom props
    invalid?: boolean
    ellipsize?: boolean
    // get out of jail free
    css?: any
}
const BaseInput = React.forwardRef(
    (
        { size, type = 'text', onChange, onEnter, onCancel, onIntermediate, value, onBlur, ...rest }: IInputProps,
        ref: React.RefObject<HTMLInputElement>
    ) => {
        const [localValue, setValue] = React.useState<string>(value ?? '')
        const handleChange = React.useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value)
                onIntermediate?.(e.target.value)
            },
            [onIntermediate]
        )
        const notifyChange = React.useCallback(() => {
            if (value !== localValue) {
                onChange?.(localValue)
            } else {
                onCancel?.()
            }
        }, [onChange, localValue, value, onCancel])
        const handleBlur = React.useCallback(
            (e: React.FocusEvent<HTMLInputElement>) => {
                notifyChange()
                onBlur?.(e)
            },
            [onBlur, notifyChange]
        )
        const handleKeyDown = React.useCallback(
            (e: React.KeyboardEvent) => {
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation()
                if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.shiftKey) {
                    notifyChange()
                    onEnter?.()
                    ref.current?.blur()
                }

                if (e.nativeEvent.key === 'Escape') {
                    ref.current?.blur()
                }
            },
            [notifyChange, onEnter]
        )
        return (
            <Input
                ref={ref as React.RefObject<HTMLInputElement>}
                type={type}
                sizeOpt={size}
                value={localValue}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                {...rest}
            />
        )
    }
)

export default BaseInput
