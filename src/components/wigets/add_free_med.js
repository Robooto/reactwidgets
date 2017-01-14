import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class MedicationFreeText extends Component {
    constructor(props) {
        super(props);

    }

    submitForm(e) {
        e.preventDefault();
        console.log(this.Medication.value);
        if(!this.Medication.value) {
            //TODO add real message or soemthing I dunno
            alert('Please Complete the required field.');
            return;
        }
        const newMed = {
            EncounterDate: '1-1-1900',
            DrugID: 0,
            DrugName: this.Medication.value,
            RxNormTypeID: 0,
            DrugTypeID: 0,
            MedispanDrugID: 0,
            MedispanDrugRxNormID: 0,
            NDCCode: '',
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

        this.props.handleFreeTextAdd(newMed);
        
    }

    render() {
        return (
            <Modal
                show={this.props.showFreeText}
                onHide={this.props.handleCloseFreeText}
                keyboard={false}
                dialogClassName="custom-modal"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Add Free Text Medication</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => this.submitForm(e)}>
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-5">New Free Text Medication:</label>
                                <div className="col-sm-7">
                                    <span style={{color: "red"}}>*</span>
                                    <input type="text" className="form-control" ref={(input) => { this.Medication = input } } autoFocus={true} />
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success" onClick={(e) => this.submitForm(e)}>Add Medication</Button>
                    <Button onClick={this.props.handleCloseFreeText}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MedicationFreeText;