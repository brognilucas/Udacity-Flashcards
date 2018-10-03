import { TYPES } from '../actions/history'


export default function history(state = [], action) {
    switch (action.type) {
        case TYPES.SAVE_HISTORY:
            return {
                ...state,
                [action.history.id]: action.history
            }
        case TYPES.RECEIVE_HISTORY:
            return {
                ...state,
                ...action.history
            }
        case TYPES.REMOVE_HISTORY: {
            return {
                ...action.history
            }
        }
        default:
            return state
    }
}