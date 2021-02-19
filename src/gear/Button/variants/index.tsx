import Type from 'gear/Button/type'
import { Theme } from 'gear/Theme'

export { default as Primary } from './Primary'
export { default as Default } from './Default'
export { default as Dark } from './Dark'
export { default as Clear } from './Clear'
export { default as DarkNoBorder } from './DarkNoBorder'

import Variant from './variant'
export { Variant }
export const getVariant = (theme: Theme, type: Type) => {
    if (theme === Theme.Light) {
        switch (type) {
            case Type.Primary:
                return Variant.Primary
            case Type.Clear:
                return Variant.Clear
            case Type.Default:
                return Variant.Default
        }
    } else {
        switch (type) {
            case Type.Primary:
                return Variant.Primary
            case Type.Default:
                return Variant.Dark
            case Type.Clear:
                return Variant.DarkNoBorder
        }
    }
}
