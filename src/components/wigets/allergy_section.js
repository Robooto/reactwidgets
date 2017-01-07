/**
 * Allergy Widget
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { getAllergies } from '../../actions/allergy_actions';

// Import 3rd party items
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const actionType = {
    0: 'pencil',
    1: 'remove'
};

class AllergySection extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAllergies(47032270, 101678795);
    }

    createButton(cell, row, enumObject, rowIndex) {
        return (
            <ActionButton rowData={row} rowIndex={rowIndex} type={enumObject} onClick={(enumObject === "remove") ? this.onClickDelete : this.onClickEdit} />
        );
    }

    onClickEdit(rowData, rowIndex) {
        console.log('Edit #', rowIndex);
    }

    onClickDelete(rowData, rowIndex) {
        console.log('Delete #', rowIndex);
    }

    render() {
        return (
            <div>
                <p>
                    Please click Allergy Search / Select button to add Current Allergies to the list. Free text allergies can be entered using text box below, but they will be indicated with an asterisk (*) and will not be included in interaction and allergy checking when using OA-Rx.
                </p>
                <div>
                    Tool bar area
                </div>
                <BootstrapTable data={this.props.allergies} striped={true} hover={true} pagination>
                    <TableHeaderColumn hidden dataField="ID" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="Type" dataSort={true}>Type</TableHeaderColumn>
                    <TableHeaderColumn dataField="DrugName" dataSort={true}>Allergy Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="Reaction" dataSort={true}>Reaction</TableHeaderColumn>
                    <TableHeaderColumn dataField="ReactionDate" dataSort={true}>ReactionDate</TableHeaderColumn>
                    <TableHeaderColumn dataField="SeverityName" dataSort={true}>Severity</TableHeaderColumn>
                    <TableHeaderColumn dataSort={false} dataAlign="center" dataFormat={this.createButton.bind(this)} formatExtraData={actionType["0"]}>Edit</TableHeaderColumn>
                    <TableHeaderColumn dataSort={false} dataAlign="center" dataFormat={this.createButton.bind(this)} formatExtraData={actionType["1"]}>Del</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { allergies: state.allergy.allergies}
}

export default connect(mapStateToProps, { getAllergies })(AllergySection);

class ActionButton extends Component {
  render() {
    const { rowData, rowIndex, type, onClick } = this.props;
    return (
        <i 
            role="button" 
            className={`glyphicon glyphicon-${type}`} 
            onClick={() => onClick(rowData, rowIndex)}>
        </i>
    );
  }
}