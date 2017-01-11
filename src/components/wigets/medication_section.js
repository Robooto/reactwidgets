/**
 * Medication Widget
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { getMedications, removeMedication, updateMedication } from '../../actions/medication_actions';

// Import 3rd party items
import { BootstrapTable, TableHeaderColumn  } from 'react-bootstrap-table';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'
import { GridActionButton } from '../common/bootstrapGridHelpers';

// sub components
import EditSig from './edit_sig';
import MedicationFreeText from './add_free_med';


const actionType = {
    0: 'pencil',
    1: 'remove'
};

class MedicationSection extends Component {
    constructor(props) {
        super(props);

        // this is a way to kee the scope in the medication section when passing functions to other components
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.handleCloseSig = this.handleCloseSig.bind(this);
        this.handleSigUpdate = this.handleSigUpdate.bind(this);

        // inital state
        this.state = {
            showSigEditor: false,
            showFreeText: false,
            medInfo: {}
        }
    }

    componentWillMount() {
        this.props.getMedications(this.props.PatientID, this.props.EncounterID);
    }

    createButton(cell, row, enumObject, rowIndex) {
        return (
            <GridActionButton rowData={row} rowIndex={rowIndex} type={enumObject} onClick={(enumObject === "remove") ? this.onClickDelete : this.onClickEdit} />
        );
    }

    onClickEdit(rowData, rowIndex) {
        console.log('Edit #', rowIndex, rowData);
        this.setState({ showSigEditor: true, medInfo: rowData});
    }

    onClickDelete(rowData, rowIndex) {
        console.log('Delete #', rowIndex, rowData);
        this.props.removeMedication(rowData.MedicationId);
    }

    handleCloseSig() {
        console.log('close');
        this.setState({ showSigEditor: false});
    }

    handleSigUpdate(medData) {
        console.log('update');
        this.setState({ showSigEditor: false});
        this.props.updateMedication(medData, this.props.PatientID);
        // update medication then get grid or do some shianicans
        // need to learn about react-thunk to remove this
        setTimeout(() => {this.props.getMedications(this.props.PatientID, this.props.EncounterID)}, 400)
    }

    handleCloseFreeText() {
        console.log('close');
        this.setState({ showFreeText: false});
    }

    handleFreeTextAdd() {
        console.log('add med');
        this.setState({ showFreeText: false});
    }

    render() {
        return (
            <div>
                <p>
                    Please click Drug Search / Select button to add Current Medications to the list. Please note that medications indicated with an asterisk (*) will not be included in drug interaction checking when using OA-Rx.
                </p>
                <ButtonToolbar>
                    <Button className="pull-right" onClick={() => this.setState({ showFreeText: true})} bsStyle="primary">Add Text Free Text Medication</Button>
                </ButtonToolbar>
                <BootstrapTable data={this.props.medications} striped={true} hover={true} pagination>
                    <TableHeaderColumn hidden dataField="MedicationId" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="DrugName" dataSort={true}>Drug Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="Sig" dataSort={true}>Sig</TableHeaderColumn>
                    <TableHeaderColumn dataSort={false} dataAlign="center" dataFormat={this.createButton.bind(this)} formatExtraData={actionType["0"]}>Edit Sig</TableHeaderColumn>
                    <TableHeaderColumn dataSort={false} dataAlign="center" dataFormat={this.createButton.bind(this)} formatExtraData={actionType["1"]}>Del</TableHeaderColumn>
                </BootstrapTable>
                <EditSig showSigEditor={this.state.showSigEditor} sigData={this.state.medInfo} handleCloseSig={this.handleCloseSig} handleSigUpdate={this.handleSigUpdate} />
                <MedicationFreeText showFreeText={this.state.showFreeText} handleCloseFreeText={this.handleCloseFreeText.bind(this)} handleFreeTextAdd={this.handleFreeTextAdd.bind(this)}  />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return { medications: state.medication.medications }
}

export default connect(mapStateToProps, { getMedications, removeMedication, updateMedication })(MedicationSection);

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