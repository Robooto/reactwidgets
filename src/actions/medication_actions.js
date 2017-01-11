import axios from 'axios';

import { FETCH_PATIENT_MEDICATIONS, DELETE_PATIENT_MEDICATION, UPDATE_PATIENT_MEDICATION } from '../constants/ActionTypes';

export function getMedications(patientId, encounterId) {
    const request = axios.get(`medications/patient/${patientId}/currentmed`, {
        params: {
            "encounterId": encounterId
        }
    });

    return {
        type: FETCH_PATIENT_MEDICATIONS,
        payload: request
    }
}


export function removeMedication(medicationId) {
    
    return {
        type: DELETE_PATIENT_MEDICATION,
        payload: medicationId
    }
}

export function updateMedication(med, patientId) {
    const request = axios.put(`patients/${patientId}/medications/current/${med.MedicationID}`, med);

    return {
        type: UPDATE_PATIENT_MEDICATION,
        payload: request
    }
}