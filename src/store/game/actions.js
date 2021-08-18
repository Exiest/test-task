import * as Types from './types'

export const pushNewTurn = (x, y) => ({
    type: Types.HISTORY_PUSH_TURN,
    x,
    y
})

export const findWinner = () => ({
    type: Types.FIND_WINNER
})

export const clearTable = () => ({
    type: Types.HISTORY_CLEAR
})
