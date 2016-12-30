import { FETCH_SECTION_LAYOUT, FETCH_SECTION_EDIT_LAYOUT } from '../constants/ActionTypes';

const INITIAL_STATE = { layout: [], editLayout: {}};

export default function (state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_SECTION_LAYOUT:
            return { ...state, layout: action.payload }
        case FETCH_SECTION_EDIT_LAYOUT:
            return { ...state, editLayout: action.payload }
        default:
            return state;
    }
}