import React, { Component } from 'react';
import { connect } from 'react-redux';
//this isn't needed due to what I did below
import { bindActionCreators } from 'redux';


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