import ReactModal from 'react-modal'
import styles from './styles/styles.module.css'

const Modal = ({ children, ...props }) => {
    return (
        <ReactModal
            className={styles.modal}
            overlayClassName={styles.overlay}
            {...props}
        >
            {children}
        </ReactModal>
    )
}

export default Modal