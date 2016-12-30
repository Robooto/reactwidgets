/**
 * Medication Widget
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';



class MedicationSection extends Component {

    render() {
        return (
            <p>
                You got yourself a merry little medication section
            </p>
        );
    }
}

export default connect(null, { })(MedicationSection);