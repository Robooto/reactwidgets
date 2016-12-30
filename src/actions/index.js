
import { FETCH_SECTION_LAYOUT, FETCH_SECTION_EDIT_LAYOUT } from '../constants/ActionTypes';

let layout = [
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
    }];

export function fetchSectionLayout() {
    return {
        type: FETCH_SECTION_LAYOUT,
        payload: layout
    };
}

export function fetchSectionEditLayout() {
    return {
        type: FETCH_SECTION_EDIT_LAYOUT,
        payload: {
            'ChiefComplaintSection_Expanded': layout[0].expanded,
            'ChiefComplaintSection_Show': layout[0].show
        }
    }
}

function flattenLayout(layout) {
    return {
        ChiefComplaintSection_Expanded: layout[0].expanded,
        ChiefComplaintSection_Show: layout[0].show
    }
}