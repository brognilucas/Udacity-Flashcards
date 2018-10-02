import { AsyncStorage } from "react-native"
import { idGenerator } from '../../utils'
const STORAGE_DECKS = 'decks'

export const TYPES = {
    ADD_DECK: 'ADD_DECK',
    RECEIVE_DECKS: 'RECEIVE_DECKS',
    ADD_QUESTION: 'ADD_QUESTION'
}


function addDeckHandler(deck){
    return { 
        type: TYPES.ADD_DECK, 
        deck
    }
}

function receiveDecksHandler(decks){
    return { 
        type: TYPES.RECEIVE_DECKS, 
        decks   
    }
}

function addQuestionHandler(deck){
    return { 
        type: TYPES.ADD_QUESTION, 
        deck
    }
}

export function receiveDecks(){
    return async (dispatch) => {
        const decks = await AsyncStorage.getItem(STORAGE_DECKS).then(JSON.parse)

        dispatch(receiveDecksHandler(decks))
    }
}

export function addDeck(name) {
    return (dispatch) => {
        let deck = {
            id: idGenerator(),
            name, questions: []
        }

        AsyncStorage.mergeItem(STORAGE_DECKS , JSON.stringify({
            [deck.id] : deck 
        }))

        dispatch(addDeckHandler(deck))
    }
}

export function addQuestion(question, id){
    return async (dispatch) => {
        const decks = await AsyncStorage.getItem(STORAGE_DECKS).then(JSON.parse)

        decks[id].questions.push(question)

        const deck = decks[id]

        AsyncStorage.setItem(STORAGE_DECKS , JSON.stringify(decks))

        dispatch(addQuestionHandler(deck))

    }
}