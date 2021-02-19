import Rectangle from './Rectangle'
import Circle from './Circle'
import Oval from './Oval'
import Square from './Square'
import Shape from './shape'

export const getShapeCss = (shape: Shape) => {
    switch (shape) {
        case Shape.Circle:
            return Circle
        case Shape.Oval:
            return Oval
        case Shape.Square:
            return Square
        case Shape.Rectangle:
            return Rectangle
    }
}

export { Shape, Rectangle, Circle }
