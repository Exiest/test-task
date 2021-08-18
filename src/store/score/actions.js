import * as Types from './types'

export const incrementWinsNumber = (char) => ({
    type: Types.INCREMENT_WINS,
    char
})

export const initNames = (p1, p2) => ({
    type: Types.INIT_NAMES,
    p1,
    p2
})