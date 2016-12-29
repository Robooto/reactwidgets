import { FETCH_SECTION_LAYOUT } from '../constants/ActionTypes';

const INITIAL_STATE = { layout: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SECTION_LAYOUT:
            return { ...state, layout: action.payload }
        default:
            return state;
    }
}