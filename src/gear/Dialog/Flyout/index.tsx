import React from 'react'
import Modal from 'gear/Modal'
import Container from 'gear/Container'
import * as Utils from 'gear/Utils'
import * as Layout from 'gear/Layout'
import { Size } from 'gear/size'

export interface IProps {
    children: React.ReactNode
    position: Layout.Position
    style?: React.CSSProperties
    size?: Size
    onClose?: () => void
}
const FlyoutDialog = ({ children, position, size = Size.Medium, style, onClose }: IProps) => {
    Utils.Events.useWindowEscape(onClose)
    Utils.Events.useWindowClick(onClose)
    return (
        <Modal.Layer>
            <div style={{ position: 'absolute', ...position }}>
                <Container shape={Container.Shape.Flyout} size={size} style={style}>
                    {children}
                </Container>
            </div>
        </Modal.Layer>
    )
}

export default FlyoutDialog
