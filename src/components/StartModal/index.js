import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../Modal'
import { manageStartModal } from '../../store/modal/actions'
import { initNames } from '../../store/score/actions'
import cn from 'classnames'
import styles from './styles/styles.module.css'

const StartModal = () => {
    const [error, setError] = useState(null)

    const dispatch = useDispatch()
    const { isOpen } = useSelector(state => state.modal.start)

    const handleSubmit = (e) => {
        e.preventDefault();

        let name1 = e.target.p1.value
        let name2 = e.target.p2.value

        if(!(name1.length && name2.length)) {
            setError('All fields must be filled')
            return;
        }
        else if(name1 === name2) {
            setError('Names must be different')
            return;
        }

        dispatch(initNames(name1, name2))
        dispatch(manageStartModal(false))
    }

    return (
        <Modal
            isOpen={isOpen}
        >
            <form onSubmit={handleSubmit} className={styles.modalForm}>
                <h2 className={styles.modalTitle}>Enter players' names</h2>
                <p className={styles.modalFormError}>{error}</p>
                <div className={styles.modalFormGroup}>
                    <label className={styles.modalInputLabel} htmlFor="p1">Player 1</label>
                    <input id="p1" className={cn(error && styles.inputError, styles.modalInput)} type="text" placeholder="Enter name of first player.." />
                </div>
                <div className={styles.modalFormGroup}>
                    <label className={styles.modalInputLabel} htmlFor="p2">Player 2</label>
                    <input id="p2" className={cn(error && styles.inputError, styles.modalInput)} type="text" placeholder="Enter name of second player.." />
                </div>
                <div className={styles.modalFormButtonWrap}>
                    <button type="submit" className={styles.modalFormButton}>Submit</button>
                </div>
            </form>
        </Modal>
    )
}

export default StartModal