import { AsyncStorage } from "react-native"
import { idGenerator } from '../../utils'
const HISTORY = 'HISTORY'

export const TYPES = {
    SAVE_HISTORY: 'SAVE_HISTORY',
    RECEIVE_HISTORY: 'RECEIVE_HISTORY',
    REMOVE_HISTORY: 'REMOVE_HISTO'
}

export function removeHistory(deckID){

    return async (dispatch) => {
        const history = await AsyncStorage.getItem(HISTORY).then(JSON.parse)

        const filteredHistory = Object.values(history).filter(item => item.deck !== deckID)

        await AsyncStorage.setItem(HISTORY, JSON.stringify(filteredHistory))

        await dispatch(removeHistoryHandler(filteredHistory))

    }

}

function removeHistoryHandler(history){
    return { 
        type: TYPES.REMOVE_HISTORY, 
        history 
    }
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

    return async (dispatch) => {

        const hist = await AsyncStorage.getItem(HISTORY).then(JSON.parse)

        history.id = idGenerator()

        await AsyncStorage.setItem(HISTORY, JSON.stringify({
            ...hist, 
            [history.id]: history
        }))

        dispatch(saveHistoryHandler(history))

    }

}