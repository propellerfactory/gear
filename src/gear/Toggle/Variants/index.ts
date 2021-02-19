import Light from './Light'
import Dark from './Dark'
import Variant from './variants'

export { Variant }
export const getVariantColors = (variant: Variant) => {
    switch (variant) {
        case Variant.Light:
            return Light
        case Variant.Dark:
            return Dark
    }
}
