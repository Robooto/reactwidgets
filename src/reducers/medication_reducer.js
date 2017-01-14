import { FETCH_PATIENT_MEDICATIONS, DELETE_PATIENT_MEDICATION, UPDATE_PATIENT_MEDICATION, ADD_PATIENT_MEDICATION, FETCH_SYSTEM_MEDICATIONS } from '../constants/ActionTypes';
//search.dataModel.data.rows
const INITIAL_STATE = { medications: [], search: {dataModel: {data: { rows: []}}}};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PATIENT_MEDICATIONS:
            return { ...state, medications: action.payload.data };
        case DELETE_PATIENT_MEDICATION:
            return {medications: state.medications.filter((item) => item.MedicationId !== action.payload) }
        case UPDATE_PATIENT_MEDICATION:
            return { ...state};
        case ADD_PATIENT_MEDICATION:
            return { ...state};
        case FETCH_SYSTEM_MEDICATIONS:
            return { ...state, search: action.payload.data };
        default:
            return state;
    }
}