import React from 'react'
import ContainerComponent from '../Component'
import { Size } from 'gear/size'
import { Theme } from 'gear/Theme'

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    theme?: Theme
    size: Size
}
const Container = (props: IContainerProps) => {
    return (
        <ContainerComponent
            {...props}
            onClick={e => {
                e.stopPropagation()
                props.onClick?.(e)
            }}
        />
    )
}

export default Container
