import React from 'react'
import Modal from 'gear/Modal'
import Container from 'gear/Container'
import * as Utils from 'gear/Utils'
import { Size } from 'gear/size'

export interface IProps {
    children: React.ReactNode
    onClose?: () => void
}
const DrawerDialog = ({ children, onClose }: IProps) => {
    Utils.Events.useWindowEscape(onClose)
    Utils.Events.useWindowClick(onClose)
    return (
        <Modal.Layer>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, maxHeight: '90%', overflowY: 'auto' }}>
                <Container shape={Container.Shape.Drawer} size={Size.Large}>
                    {children}
                    <div style={{ height: 24 }} />
                </Container>
            </div>
        </Modal.Layer>
    )
}

export default DrawerDialog
