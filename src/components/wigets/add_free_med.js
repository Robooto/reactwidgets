import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class MedicationFreeText extends Component {
    constructor(props) {
        super(props);

    }

    submitForm() {
        this.props.handleFreeTextAdd();
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
                    <form>
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-5">New Free Text Medication:</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" ref={(input) => { this.Medication = input } } />
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success" onClick={() => this.submitForm()}>Add Medication</Button>
                    <Button onClick={this.props.handleCloseFreeText}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MedicationFreeText;