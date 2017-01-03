/**
 * Chief Complaint Widget
 */

import React, { Component } from 'react';

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

export default ChiefComplaintSection;