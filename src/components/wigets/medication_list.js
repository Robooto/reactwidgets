/**
 * Medication Search / Select popup
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import 3rd party items
import { BootstrapTable, TableHeaderColumn  } from 'react-bootstrap-table';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

import { searchMedications } from '../../actions/medication_actions';

class MedicationSearch extends Component {
    constructor(props) {
        super(props);

        // inital state
        this.state = {
            showSearch: false
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.searchMedications();
    }
    handleRowSelect(row, isSelected, e) {
        console.log(arguments);
        // make this add to grid
        const med = {
            EncounterDate: '1-1-1900',
            DrugID: row.DrugID,
            DrugName: row.Description,
            RxNormTypeID: 0,
            DrugTypeID: 0,
            MedispanDrugID: row.RxNormDrugID,
            MedispanDrugRxNormID: row.DrugTypeID,
            NDCCode: row.NDCCode,
            ProviderName: '',
            CopyBit: 0,
            Sig: '',
            Refill: '',
            Quantity: 0,
            PatientMedicationSystemComment: "/emr/controls/ProgressNoteWidgetContainer.ascx",
            StartDate: '',
            EndDate: '',
            Comments: ''
        };
        this.props.addMedication(med);
    }

    render() {
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: this.handleRowSelect.bind(this)
        };
        return (
            <section style={{marginRight: 5}}>
                <Button className="pull-right" onClick={() => this.setState({ showSearch: true})} bsStyle="primary">System Medication Search</Button>
                <Modal
                show={this.state.showSearch}
                onHide={() => this.setState({ showSearch: false})}
                keyboard={false}
                dialogClassName="custom-modal"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Medication Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => this.submitForm(e)}>
                        <div className="form-horizontal">
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <BootstrapTable selectRow={ selectRow } data={this.props.gridData} striped={true} hover={true} pagination>
                        <TableHeaderColumn hidden dataField="DrugID" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn hidden dataField="DrugTypeID" dataAlign="center" dataSort={true}>DrugTypeID</TableHeaderColumn>
                        <TableHeaderColumn hidden dataField="NDCCode" dataAlign="center" dataSort={true}>NDCCode</TableHeaderColumn>
                        <TableHeaderColumn dataField="Description" dataSort={true}>Description</TableHeaderColumn>
                        <TableHeaderColumn hidden dataField="RxNormDrugID" dataAlign="center" dataSort={true}>RxNormDrugID</TableHeaderColumn>
                        <TableHeaderColumn hidden dataField="RxNormType" dataAlign="center" dataSort={true}>RxNormType</TableHeaderColumn>
                        <TableHeaderColumn dataField="DrugType" dataSort={true}>Type</TableHeaderColumn>
                    </BootstrapTable>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.setState({ showSearch: false})}>Close</Button>
                </Modal.Footer>
            </Modal>
            </section>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return { gridData: state.medication.search.dataModel.data.rows }
}


export default connect(mapStateToProps, { searchMedications })(MedicationSearch);