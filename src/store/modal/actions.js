import * as Types from './types'

export const manageStartModal = (status) => ({
    type: Types.MANAGE_START_MODAL,
    status
})

export const manageAlertModal = (status, message = null) => ({
    type: Types.MANAGE_ALERT_MODAL,
    status,
    message
})