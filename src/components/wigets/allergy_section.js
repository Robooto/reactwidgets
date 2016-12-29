import React, { Component } from 'react';
import { connect } from 'react-redux';
//this isn't needed due to what I did below
import { bindActionCreators } from 'redux';


class AllergySection extends Component {

    render() {
        return (
            <div>
                <p>
                    Please click Allergy Search / Select button to add Current Allergies to the list. Free text allergies can be entered using text box below, but they will be indicated with an asterisk (*) and will not be included in interaction and allergy checking when using OA-Rx.
                </p>
                <div>
                    Tool bar area
                </div>
                <div>
                    Grid here
                </div>
            </div>
        );
    }
}

export default connect(null, {})(AllergySection);