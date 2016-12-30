import _ from 'lodash';

import { FETCH_SECTION_LAYOUT, FETCH_SECTION_EDIT_LAYOUT, UPDATE_LAYOUT_SETTINGS } from '../constants/ActionTypes';

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
    let flatLayout = flattenLayout(layout);
    return {
        type: FETCH_SECTION_EDIT_LAYOUT,
        payload: flatLayout
    }
}

export function updateLayoutSettings(settings) {
    let settingsArray = makeSettingsArray(settings);

    layout = _(layout)
        .concat(settingsArray)
        .groupBy("id")
        .map(_.spread(_.merge))
        .value();

    return {
        type: UPDATE_LAYOUT_SETTINGS
    }

}

function makeSettingsArray(settings) {
    var arrayKeys = [];
    _.each(settings, function (value, keyName) {

        var proKey = keyName.split('_');
        arrayKeys = arrayKeys.concat([proKey[0]]);

    });

    // Get unique key names
    arrayKeys = _.uniq(arrayKeys);

    // Create an array like the original settings array
    var backArray = [];
    arrayKeys.forEach(function (value) {
        var group = {};
        _.each(settings, function (val, keyName) {
            if (keyName.indexOf(value) !== -1) {
                var proKey = keyName.split('_');
                group[proKey[1]] = val;
            }
        });
        backArray.push(group);
    });
    return backArray;
}

function flattenLayout(layout) {
    var flat = {};

    layout.forEach(function (value) {
        var keys = Object.keys(value);
        flat[value.component + '_' + keys[4]] = value.show;
        flat[value.component + '_' + keys[3]] = value.expanded;
        flat[value.component + '_' + keys[0]] = value.id;
    });

    return flat;
}