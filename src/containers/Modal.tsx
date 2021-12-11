import React from 'react'
import Grid from "./Grid";
import {Button} from "react-bootstrap";
import {Modal as ModalBS} from "react-bootstrap/cjs";

import './styles/Modal.css'

type Props = {
    title: string
    show: boolean
    onHide: () => void
    items: React.ReactNode[]
}

const Modal = ({title, show, onHide, items}: Props) => {
    return (
        <ModalBS show={show} onHide={onHide}>
            <ModalBS.Header closeButton>
                <ModalBS.Title>{title}</ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body>
                <Grid items={items}/>
            </ModalBS.Body>
            <ModalBS.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </ModalBS.Footer>
        </ModalBS>
    )
}

export default Modal