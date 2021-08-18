import Modal from '../Modal'
import { useSelector, useDispatch } from 'react-redux'
import { manageAlertModal } from '../../store/modal/actions'
import { clearTable } from '../../store/game/actions'
import styles from './styles/styles.module.css'

const AlertModal = () => {
    const { isOpen, message } = useSelector(state => state.modal.alert)
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(clearTable())
        dispatch(manageAlertModal(false))
    }

    return (
        <Modal
            isOpen={isOpen}
        >
            <div className={styles.alertModalWrap}>
                <h2 className={styles.modalTitle}>{message}</h2>
                <button onClick={closeModal} type="submit" className={styles.alertModalButton}>OK</button>
            </div>    
        </Modal>
    )
}

export default AlertModal