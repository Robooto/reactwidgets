/**
 * Chief Complaint Widget
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';


class ChiefComplaintSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complaintText: 'Annual Wellness Visit'
        }
    }

    render() {
        return (
            <div>
                <h5>Chief Complaint</h5>
                <textarea disabled defaultValue={this.state.complaintText}></textarea>
            </div>
        );
    }
}

export default connect(null, { })(ChiefComplaintSection);