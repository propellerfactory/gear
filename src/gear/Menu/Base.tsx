import React from 'react'
import Dialog from 'gear/Dialog'
import * as Layout from 'gear/Layout'
import { ItemClickEvent } from 'gear/Menu/Item'

interface IProps {
    children: JSX.Element | JSX.Element[]
    position: Layout.Position
    onClose: () => void
}
const MenuContainer = ({ position, children, onClose }: IProps) => {
    return (
        <Dialog.Flyout size={Dialog.Size.Small} position={position} onClose={onClose} style={{ fontWeight: 400 }}>
            <div
                style={{ minWidth: 192, padding: 4 }}
                onClick={(e: ItemClickEvent) => {
                    if (e.isItemClick) {
                        // auto close the menu when an item is clicked
                        onClose()
                    }
                }}
            >
                {children}
            </div>
        </Dialog.Flyout>
    )
}

export default MenuContainer
