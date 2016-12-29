
import { FETCH_SECTION_LAYOUT } from '../constants/ActionTypes';

export function fetchSectionLayout() {
    return {
        type: FETCH_SECTION_LAYOUT,
        payload: [{ id: 1, title: 'Allergies', component: 'AllergySection', expanded: true },{ id: 2, title: 'Medications', component: 'MedicationSection', expanded: true }]
    };
}