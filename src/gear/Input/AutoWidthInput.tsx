import React from 'react'
import Base, { IProps as IBaseProps } from './Base'
import { Variant } from './variants'
import { Type } from 'common/styles'

interface IAutoWidthInputProps extends IBaseProps {
    fontSize?: number
    fontFamily?: string
    fontWeight?: number
    minWidth?: number
}

const AutoWidthInput = ({ fontSize, fontFamily, fontWeight, minWidth, ...rest }: IAutoWidthInputProps) => {
    const fontSpec = {
        fontSize: fontSize ?? 14,
        fontFamily: fontFamily ?? Type.sansChrome,
        fontWeight: fontWeight ?? 500
    }
    const [width, setWidth] = React.useState(0)
    const measuredRef = React.useRef<HTMLDivElement>(null)
    const [measurableText, setMeasurableText] = React.useState(
        rest.value && rest.value.length > 0 ? rest.value : rest.placeholder
    )

    const handleIntermediate = (value: string) => {
        rest.onIntermediate?.(value)
        if (value.length > 0) {
            setMeasurableText(value)
        } else {
            setMeasurableText(rest.placeholder)
        }
    }

    React.useEffect(() => {
        if (measuredRef.current) {
            setWidth(measuredRef.current.getBoundingClientRect().width)
        }
    }, [measurableText, measuredRef])

    return (
        <>
            <div style={{ position: 'relative' }}>
                <Base
                    {...rest}
                    ellipsize={true}
                    style={{ ...fontSpec, width: width, boxSizing: 'content-box', maxWidth: 250 }}
                    onIntermediate={handleIntermediate}
                />
            </div>
            <div
                ref={measuredRef}
                style={{
                    position: 'absolute',
                    width: 'fit-content',
                    visibility: 'hidden',
                    whiteSpace: 'pre',
                    ...fontSpec
                }}
            >
                {measurableText}
            </div>
        </>
    )
}

AutoWidthInput.Variant = Variant

export default AutoWidthInput
