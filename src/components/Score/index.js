import { useSelector } from 'react-redux'
import styles from './styles/styles.module.css'

const Score = () => {
    const { player1, player2 } = useSelector(state => state.score)

    return (
        <aside className={styles.scoreWrap}>
            <h2 className={styles.scoreTitle}>Score</h2>
            <p className={styles.playerScore}>
                <span>{player1.name}</span> : <span>{player1.wins}</span>
            </p>
            <p className={styles.playerScore}>
                <span>{player2.name}</span> : <span>{player2.wins}</span>
            </p>
        </aside>
    )
}

export default Score;