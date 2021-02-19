import React from 'react'
import Modal from 'gear/Modal'
import Container from 'gear/Container'
import * as Layout from 'gear/Layout'
import { Size } from 'gear/size'

export interface IProps {
    children: React.ReactNode
}
const FullScreenDialog = ({ children }: IProps) => {
    return (
        <Modal.Layer>
            <Layout.Absolute.Full>
                <Container shape={Container.Shape.FullScreen} size={Size.Large}>
                    {children}
                    <div style={{ height: 24 }} />
                </Container>
            </Layout.Absolute.Full>
        </Modal.Layer>
    )
}

export default FullScreenDialog
