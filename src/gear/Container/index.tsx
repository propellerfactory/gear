import React from 'react'
import * as Shapes from './Shapes'
import { IContainerProps } from './Shapes/Base'

interface IProps extends IContainerProps {
    shape?: Shapes.Shape
}
const Container = ({ shape = Shapes.Shape.Default, ...rest }: IProps) => {
    switch (shape) {
        case Shapes.Shape.Default:
            return <Shapes.Plain {...rest} />
        case Shapes.Shape.Drawer:
            return <Shapes.Drawer {...rest} />
        case Shapes.Shape.Flyout:
            return <Shapes.Flyout {...rest} />
        case Shapes.Shape.FullScreen:
            return <Shapes.FullScreen {...rest} />
    }
}
Container.Shape = Shapes.Shape
export default Container
