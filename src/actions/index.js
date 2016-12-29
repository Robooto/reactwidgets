
import { FETCH_SECTION_LAYOUT } from '../constants/ActionTypes';

export function fetchSectionLayout() {
    return {
        type: FETCH_SECTION_LAYOUT,
        payload: [
        {
            id: 1,
            title: 'Chief Complaint',
            component: 'ChiefComplaintSection',
            expanded: false,
            show: true
        },
        {
            id: 2,
            title: 'Allergies',
            component: 'AllergySection',
            expanded: true,
            show: true
        },
        {
            id: 3,
            title: 'Medications',
            component: 'MedicationSection',
            expanded: true,
            show: true
        }]
    };
}