import React from 'react'
import Base, { IProps as IBaseProps } from './Base'
import styled from 'styled-components'

const LabelContainer = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 12px 16px;
    font-size: 13px;
    font-weight: 500;
    user-select: none;
    pointer-events: none;
`

const ActionContainer = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 4px;
`

type Padding = { left: number; right: number }
const getCss = ({ left, right }: Padding) => {
    const css: { paddingLeft?: number; paddingRight?: number } = {}
    if (left > 0) {
        css.paddingLeft = left
    }
    if (right > 0) {
        css.paddingRight = right
    }
    return css
}

interface IProps extends IBaseProps {
    label?: string
    action?: React.ReactNode
}
const ComplexInput = ({ label, action, ...rest }: IProps) => {
    const [padding, setPadding] = React.useState<Padding>({ left: 0, right: 0 })
    const labelRef = React.useRef<HTMLSpanElement>(null)
    const actionRef = React.useRef<HTMLSpanElement>(null)
    React.useEffect(() => {
        let left = 0
        let right = 0

        const labelRect = labelRef.current?.getBoundingClientRect()
        if (label && labelRect?.width) {
            left = labelRect.width
        }
        const actionRect = actionRef.current?.getBoundingClientRect()
        if (action && actionRect?.width) {
            right = actionRect.width
        }
        setPadding({ left, right })
    }, [label, action])
    return (
        <div style={{ position: 'relative' }}>
            <Base style={getCss(padding)} {...rest} />
            {label && <LabelContainer ref={labelRef}>{label}</LabelContainer>}
            {action && <ActionContainer ref={actionRef}>{action}</ActionContainer>}
        </div>
    )
}

export default ComplexInput
