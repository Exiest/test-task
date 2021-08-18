import Table from '../Table'
import Score from '../Score'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { manageStartModal } from '../../store/modal/actions'

import styles from './styles/styles.module.css'

const Game = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(manageStartModal(true))
    }, [dispatch])

    return (
        <div className={styles.gameWrap}>
            <main className={styles.gameBlock}>
                <Table />
                <Score /> 
            </main>
        </div>
    )
}

export default Game;