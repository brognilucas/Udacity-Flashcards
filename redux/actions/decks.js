import { AsyncStorage } from "react-native"
import { idGenerator } from '../../utils'
const STORAGE_DECKS = 'decks'
export const TYPES = {
    ADD_DECK: 'ADD_DECK'
}


function addDeckHandler(deck){
    return { 
        type: TYPES.ADD_DECK, 
        deck
    }
}

export function addDeck(name) {
    return (dispatch) => {
        let deck = {
            id: idGenerator(),
            name
        }

        AsyncStorage.mergeItem(STORAGE_DECKS , JSON.stringify({
            [deck.id] : deck
        }))

        dispatch(addDeckHandler(deck))
    }
}