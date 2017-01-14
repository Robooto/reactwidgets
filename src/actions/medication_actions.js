import axios from 'axios';

import { FETCH_PATIENT_MEDICATIONS, DELETE_PATIENT_MEDICATION, UPDATE_PATIENT_MEDICATION, ADD_PATIENT_MEDICATION, FETCH_SYSTEM_MEDICATIONS } from '../constants/ActionTypes';

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

export function addMedication(med) {
    const request = axios.post(`medications/patient/${med.PatientID}/currentmed`, med);

    return {
        type: ADD_PATIENT_MEDICATION,
        payload: request
    }
}

export function searchMedications() {
    const request = axios.post(`jqgrid/MedicationsMediSpan`, {"maxrecords":100,"confilter":true,"datafilter":[],"staticparams":[]});

    return {
        type: FETCH_SYSTEM_MEDICATIONS,
        payload: request
    }
}