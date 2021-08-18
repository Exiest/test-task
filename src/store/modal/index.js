import * as Types from './types'

const initialState = {
    start: { isOpen: true },
    alert: { isOpen: false, message: null }
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.MANAGE_START_MODAL: {
            let { status } = action
            return {...state, start: {...state.start, isOpen: status } }
        }
        case Types.MANAGE_ALERT_MODAL: {
            let { status, message } = action
            return {...state, alert: {...state.alert, isOpen: status, message }}
        }
        default: return state
    }
}

export default modalReducer