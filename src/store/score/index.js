import * as Types from './types'

const initialState = {
    player1: { name: '', wins: 0, char: 'x' },
    player2: { name: '', wins: 0, char: 'o' }
}

const scoreReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.INCREMENT_WINS: {
            let { char } = action

            if(char === 'x') {
                let p1 = state.player1
                return {...state, player1: {...p1, wins: p1.wins + 1 }}
            } else if(char === 'o') {
                let p2 = state.player2
                return {...state, player2: {...p2, wins: p2.wins + 1 }}
            } else {
                return state
            }
        }
        case Types.INIT_NAMES: {
            let { p1, p2 } = action

            return {...state, player1: {...state.player1, name: p1 }, player2: {...state.player2, name: p2 }}
        }
        default: return state
    }
}

export default scoreReducer