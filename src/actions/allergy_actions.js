
import axios from 'axios';

import { FETCH_PATIENT_ALLERGIES } from '../constants/ActionTypes';

export function getAllergies(patientId, encounterId) {
    const request = axios.get(`patients/${patientId}/allergies`, {
        params: {
            "encounterId": encounterId
        }
    });

    return {
        type: FETCH_PATIENT_ALLERGIES,
        payload: request
    }
}