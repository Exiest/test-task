import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushNewTurn, findWinner } from '../../store/game/actions'
import { incrementWinsNumber } from '../../store/score/actions'
import { manageAlertModal } from '../../store/modal/actions'

import cn from 'classnames'

import styles from './styles/styles.module.css'

const Table = () => {
    const dispatch = useDispatch()

    const { history, winner, draw } = useSelector(state => state.game)
    debugger;

    useEffect(() => {
        if(winner) {
            dispatch(incrementWinsNumber(winner.char))
            dispatch(manageAlertModal(true, `${winner.char} wins!`))
        }
    }, [winner, dispatch])

    useEffect(() => {
        if(draw) {
            dispatch(manageAlertModal(true, `Draw!`))
        }
    }, [draw, dispatch])

    const dispatchTurn = (xn, yn) => {
        dispatch(pushNewTurn(xn, yn))
        dispatch(findWinner())
    }

    const setChar = (currX, currY) => {
        let item = history.find(({ x, y }) => x === currX && y === currY );

        if(!item) return null

        return item.char === 'x' ? 'X' : 'О'
    }

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                {[0,1,2].map((y) => <div className={styles.row}>
                    {[0,1,2].map((x) => (
                        <div onClick={() => !winner && !setChar(x, y) && dispatchTurn(x, y)} className={cn(styles.cell, setChar(x,y) && styles.occupied)}>
                            {setChar(x, y)}
                        </div>
                    ))}
                </div>)}
            </div>
        </div>
    )
}

export default Table