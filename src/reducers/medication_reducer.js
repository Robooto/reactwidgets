import { FETCH_PATIENT_MEDICATIONS, DELETE_PATIENT_MEDICATION, UPDATE_PATIENT_MEDICATION } from '../constants/ActionTypes';

const INITIAL_STATE = { medications: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PATIENT_MEDICATIONS:
            return { ...state, medications: action.payload.data }
        case DELETE_PATIENT_MEDICATION:
            return {medications: state.medications.filter((item) => item.MedicationId !== action.payload) }
        case UPDATE_PATIENT_MEDICATION:
            return { ...state}
        default:
            return state;
    }
}