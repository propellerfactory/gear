import React from 'react'
import Button, { IProps as IButtonProps } from 'gear/Button'

export type ItemClickEvent = React.MouseEvent & { isItemClick?: boolean }

interface IProps extends Omit<IButtonProps, 'size' | 'shape' | 'width' | 'variant' | 'onClick'> {
    onClick?: (e: ItemClickEvent) => void

    testId?: string
}
const MenuItem = ({ onClick, testId, ...rest }: IProps) => {
    const handleClick = React.useCallback((e: ItemClickEvent) => {
        onClick?.(e)
        if (!e.isPropagationStopped()) {
            e.isItemClick = true
        }
    }, [])
    return (
        <Button
            type={Button.Type.Clear}
            size={Button.Size.Medium}
            shape={Button.Shape.Rectangle}
            width={Button.Width.Grow}
            {...rest}
            onClick={handleClick}
            style={{ fontWeight: 400 }}
            id={testId}
        />
    )
}

export default MenuItem
