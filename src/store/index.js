import { createStore, combineReducers } from 'redux'
import score from './score'
import game from './game'
import modal from './modal'

const rootReducer = combineReducers({
    score,
    game,
    modal
})

const store = createStore(rootReducer);

export default store