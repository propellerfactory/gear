import React from 'react'
import { Layout, Modal, Container, Utils } from 'gear'
import { Size } from 'gear/size'
import { Theme } from 'gear/Theme'

interface IProps {
    children: React.ReactNode
    theme?: Theme
    size?: Size
    onClose?: () => void
    id?: string
}
const ModalDialog = ({ children, size = Size.Large, theme, id, onClose }: IProps) => {
    Utils.Events.useWindowEscape(onClose)
    return (
        <Modal.Layer id={id} onClick={onClose}>
            <>
                <Modal.Scrim onClick={onClose} />
                <Layout.Absolute.Center>
                    <Container theme={theme} size={size}>
                        {children}
                    </Container>
                </Layout.Absolute.Center>
            </>
        </Modal.Layer>
    )
}

export default ModalDialog
