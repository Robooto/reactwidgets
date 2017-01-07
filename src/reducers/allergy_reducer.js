import { FETCH_PATIENT_ALLERGIES } from '../constants/ActionTypes';

const INITIAL_STATE = { allergies: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PATIENT_ALLERGIES:
            return { ...state, allergies: action.payload.data }
        default:
            return state;
    }
}