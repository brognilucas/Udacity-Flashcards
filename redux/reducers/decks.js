import { TYPES } from '../actions/decks'

export default function decks(state = [], action) {
    switch (action.type) {

        case TYPES.ADD_DECK:
            return {
                ...state,
                [action.deck.id] : action.deck
            }

        default:
            return state
    }
}