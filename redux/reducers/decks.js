import { TYPES } from '../actions/decks'

export default function decks(state = {}, action) {
    switch (action.type) {

        case TYPES.ADD_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck
            }
        case TYPES.RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case TYPES.ADD_QUESTION:
            return {
                ...state, 
                [action.deck.id] : action.deck
            }
        case TYPES.REMOVE_QUETIONS: 
            return { 
                ...state, 
                [action.deck.id] : action.deck
            }
        case TYPES.REMOVE_CARD: 
            delete state[action.id]
            return { 
                ...state
            }
        default:
            return state
    }
}