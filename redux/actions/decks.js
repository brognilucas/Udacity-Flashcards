import { AsyncStorage } from "react-native"
import { idGenerator } from '../../utils'
import { removeHistory } from './history'
const STORAGE_DECKS = 'decks'

export const TYPES = {
    ADD_DECK: 'ADD_DECK',
    RECEIVE_DECKS: 'RECEIVE_DECKS',
    ADD_QUESTION: 'ADD_QUESTION',
    REMOVE_QUETIONS: 'REMOVE_QUESTIONS',
    REMOVE_CARD: 'REMOVE_CARD'
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

function removeQuestionsHandler(deck){
    return { 
        type: TYPES.REMOVE_QUETIONS , 
        deck
    }
}

function addQuestionHandler(deck){
    return { 
        type: TYPES.ADD_QUESTION, 
        deck
    }
}

function removeCardHandler(id){
    return { 
        type: TYPES.REMOVE_CARD,
        id
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

export function removeQuestions(id){
    return async (dispatch) => {
        const decks = await AsyncStorage.getItem(STORAGE_DECKS).then(JSON.parse)

        decks[id].questions = []

        const deck = decks[id]

        AsyncStorage.setItem(STORAGE_DECKS , JSON.stringify(decks))

        dispatch(removeQuestionsHandler(deck))
    }
}

export function removeCard(id){
    return async (dispatch) => {
        const decks = await AsyncStorage.getItem(STORAGE_DECKS).then(JSON.parse)

        await dispatch(removeHistory(id))

        delete decks[id]

        await AsyncStorage.setItem(STORAGE_DECKS, JSON.stringify(decks))

        dispatch(removeCardHandler(id))
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