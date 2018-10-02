import { AsyncStorage } from "react-native"
import { idGenerator } from '../../utils'
const HISTORY = 'HISTORY'

export const TYPES = {
    SAVE_HISTORY: 'SAVE_HISTORY',
    RECEIVE_HISTORY: 'RECEIVE_HISTORY'
}


function saveHistoryHandler(history) {
    return {
        type: TYPES.SAVE_HISTORY,
        history
    }
}

function receiveHistoryHandler(history) {
    return {
        type: TYPES.RECEIVE_HISTORY,
        history
    }
}

export function receiveHistory() {
    return async (dispatch) => {

        const history = await AsyncStorage.getItem(HISTORY).then(JSON.parse)

        dispatch(receiveHistoryHandler(history))
    }
}

export function saveHistory(history) {

    return (dispatch) => {


        history.id = idGenerator()

        AsyncStorage.mergeItem(HISTORY, JSON.stringify({
            [history.id]: history
        }))

        dispatch(saveHistoryHandler(history))

    }

}