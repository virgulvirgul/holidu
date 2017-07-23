import { FETCH_GALLERIES } from '../actions/types';

export default function(state = [], action) {
    switch  (action.type) {
        case FETCH_GALLERIES:
            return [ ...state, ...action.payload ];
        default:
            return state;
    }
}