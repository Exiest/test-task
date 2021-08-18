import * as Types from './types'

const initialState = {
    currentTurn: 'x',
    history: [],
    winner: null,
    draw: false,
    winConditions : [
        [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}],
        [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
        [{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}],
        [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
        [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}],
        [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}],
        [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}]
    ]
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.FIND_WINNER: {
            let turnX = state.currentTurn === 'x'

            let winner = state.winConditions.reduce((result, combination) => {
                let status = combination.reduce((currState, pair) => {
                    let turn = state.history.find(({ x, y }) => x === pair.x && y === pair.y);
                    if(!turn) {
                        currState.success = false 
                    } else {
                        if(!currState.char) {
                            currState.char = turn.char;
                        }
                        else {
                            if(currState.char !== turn.char) {
                                currState.success = false;
                            }
                        }
                    }
                    return currState;
                }, { success: true, char : '', combination }) 
                
                let { success, ...rest} = status

                return success ? {...rest} : result
            }, null)

            let possibleDraw = state.winConditions.reduce((result, combination) => {
                let combinationStatus = combination.reduce((currState, pair) => {
                    let turn = state.history.find(({ x, y }) => x === pair.x && y === pair.y);
                    let { blocked, char } = currState;

                    if(blocked) return currState

                    if(turn) {
                        if(!char) {
                            currState.char = turn.char;
                        } else {
                            if(char !== turn.char) {
                                currState.blocked = true;
                            }
                        }
                    }
                    return currState
                }, { blocked: false, char: '' })

                if(!combinationStatus.blocked) return false
                else return result
            }, true)

            if(possibleDraw) return {...state, draw: true }

            if(!winner && state.history.length === 9) return {...state, draw: true }

            return {...state, currentTurn: turnX ? 'o' : 'x', winner }
        } 
        case Types.HISTORY_PUSH_TURN: {
            let { x, y } = action
            return {...state, history: [...state.history, { x, y, char: state.currentTurn }]}
        }
        case Types.HISTORY_CLEAR: {
            return initialState
        }
        default: return state
    }
}

export default gameReducer