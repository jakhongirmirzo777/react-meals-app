import classes from './Modal.module.css'
import {Fragment} from "react";
import {createPortal} from "react-dom";

const Backdrop = ({onClose}) => (<div onClick={onClose} className={classes['backdrop']}/>)

const ModalOverlay = ({children}) => {
    return (
        <div className={classes['modal']}>
            <div className={classes['content']}>{children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = ({children, onClose}) => {
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={onClose}/>, portalElement)}
            {createPortal(<ModalOverlay onClose={onClose}>{children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal