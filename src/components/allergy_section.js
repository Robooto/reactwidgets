import React, { Component } from 'react';
import { connect } from 'react-redux';
//this isn't needed due to what I did below
import { bindActionCreators } from 'redux';


class AllergySection extends Component {

    render() {
        return (
            <p>
                You got yourself a merry little allergy section
            </p>
        );
    }
}

export default connect(null, { })(AllergySection);