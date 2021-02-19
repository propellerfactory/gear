import React from 'react'
import ReactDOM from 'react-dom'
import { Type } from 'common/styles'

interface IProps {
    children: React.ReactNode
    id?: string | undefined
    onClick?: () => void
}
export default class ModalLayer extends React.Component<IProps> {
    private _modalRoot: HTMLElement | null = null
    private _element: HTMLDivElement
    constructor(props: IProps) {
        super(props)
        this._element = document.createElement('div')
        this._modalRoot = document.getElementById('modalRoot2')
        // Since the modal root is a sibling of the App root,
        // the font family set in the app root won't apply to children of the modal root,
        // so set it here as well
        if (this._modalRoot != null) {
            this._modalRoot.style.fontFamily = Type.sansChrome
            this._modalRoot.style.position = 'fixed'
            this._modalRoot.style.top = '0px'
            this._modalRoot.style.left = '0px'
            this._modalRoot.style.width = '100%'
            this._modalRoot.style.height = '100%'
            this._modalRoot.style.zIndex = '99999999'
            this._modalRoot.style.pointerEvents = 'none'
        }
        this._element.style.pointerEvents = 'all'
        if (props.id) {
            this._element.id = props.id
        }
    }

    public componentDidMount() {
        this._modalRoot?.appendChild(this._element)
    }

    public componentWillUnmount() {
        this._modalRoot?.removeChild(this._element)
    }

    public render() {
        return ReactDOM.createPortal(this.props.children, this._element)
    }
}
