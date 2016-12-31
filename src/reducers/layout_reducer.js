import { FETCH_SECTION_LAYOUT, FETCH_SECTION_EDIT_LAYOUT, UPDATE_LAYOUT_SETTINGS, ADD_SECTION } from '../constants/ActionTypes';

const INITIAL_STATE = { sections: [], settings: {}};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SECTION_LAYOUT:
            return { ...state, sections: action.payload }
        case FETCH_SECTION_EDIT_LAYOUT:
            return { ...state, settings: action.payload }
        case UPDATE_LAYOUT_SETTINGS:
            return {...state}
        case ADD_SECTION:
            return { ...state, sections: action.payload }
        default:
            return state;
    }
}