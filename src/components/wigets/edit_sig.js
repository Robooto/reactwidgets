import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class EditSig extends Component {
    constructor(props) {
        super(props);

    }

    submitForm() {

        const medData = {
            MedicationID: this.props.sigData.MedicationId,
            ActionID: this.Action.value,
            NumberID: this.Number.value,
            FormID: this.Form.value,
            RouteID: this.Route.value,
            FrequencyID: this.Frequency.value,
            ProblemID: this.Problem.value,
            SigInfo: this.SigInfo.value
        };
        console.log(medData);
        this.props.handleSigUpdate(medData);
    }

    render() {
        return (
            <Modal
                show={this.props.showSigEditor}
                onHide={this.props.handleCloseSig}
                keyboard={false}
                dialogClassName="custom-modal"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Sig Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-2">Action:</label>
                                <div className="col-sm-10">
                                    <select className="form-control" ref={(input) => {this.Action = input}} defaultValue={this.props.sigData.SigDosageActionTypeID}>
                                        <option value="-1"></option>
                                        <option value="1">Apply</option>
                                        <option value="5">Inhale</option>
                                        <option value="8">Inject</option>
                                        <option value="2">Insert</option>
                                        <option value="3">Mix</option>
                                        <option value="4">Place</option>
                                        <option value="6">Take</option>
                                        <option value="7">Use</option>
                                        <option value="0">Add'l Sig</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2">Amount:</label>
                                <div className="col-sm-10">
                                    <select className="form-control" ref={(input) => {this.Number = input}} defaultValue={this.props.sigData.SigDosageNumberTypeID}>
                                        <option value="-1"></option>
                                        <option value="2">1</option>
                                        <option value="3">1-2</option>
                                        <option value="4">1-3</option>
                                        <option value="18">2-3</option>
                                        <option value="25">0.33/third</option>
                                        <option value="1">0.5/half</option>
                                        <option value="5">1.5</option>
                                        <option value="6">2</option>
                                        <option value="15">2.5</option>
                                        <option value="7">3</option>
                                        <option value="8">4</option>
                                        <option value="9">5</option>
                                        <option value="19">6</option>
                                        <option value="20">7</option>
                                        <option value="21">8</option>
                                        <option value="22">9</option>
                                        <option value="10">10</option>
                                        <option value="23">11</option>
                                        <option value="24">12</option>
                                        <option value="11">15</option>
                                        <option value="12">20</option>
                                        <option value="13">30</option>
                                        <option value="14">Add'l Sig</option>
                                        <option value="16">7.5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2">Form:</label>
                                <div className="col-sm-10">
                                    <select className="form-control" ref={(input) => {this.Form = input}} defaultValue={this.props.sigData.SigDosageFormTypeID}>
                                        <option value="-1"></option>
                                        <option value="0">Add'l Sig</option>
                                        <option value="1">application</option>
                                        <option value="2">capsule</option>
                                        <option value="3">drop</option>
                                        <option value="4">gm</option>
                                        <option value="5">lozenge</option>
                                        <option value="17">mcg</option>
                                        <option value="18">mg</option>
                                        <option value="6">mL</option>
                                        <option value="7">patch</option>
                                        <option value="8">pill</option>
                                        <option value="9">puff</option>
                                        <option value="10">squirt</option>
                                        <option value="11">suppository</option>
                                        <option value="12">tablet</option>
                                        <option value="13">troche</option>
                                        <option value="14">unit</option>
                                        <option value="15">syringe</option>
                                        <option value="16">package</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2">Route:</label>
                                <div className="col-sm-10">
                                    <select className="form-control" ref={(input) => {this.Route = input}} defaultValue={this.props.sigData.SigDosageRouteTypeID}>
                                        <option value="-1"></option>
                                        <option value="1">as directed</option>
                                        <option value="2">by mouth</option>
                                        <option value="4">in both ears</option>
                                        <option value="32">in left ear</option>
                                        <option value="33">in right ear</option>
                                        <option value="5">in both eyes</option>
                                        <option value="34">in left eye</option>
                                        <option value="35">in right eye</option>
                                        <option value="40">apply to eyelids</option>
                                        <option value="42">in surgical eye</option>
                                        <option value="36">apply to face</option>
                                        <option value="37">thin layer to face</option>
                                        <option value="38">via feeding tube</option>
                                        <option value="11">inhale</option>
                                        <option value="12">intramuscular inject</option>
                                        <option value="23">intravenous</option>
                                        <option value="30">under the lip</option>
                                        <option value="41">apply to nails</option>
                                        <option value="6">in the nostrils</option>
                                        <option value="14">inject into the penis</option>
                                        <option value="7">in the rectum</option>
                                        <option value="39">apply to the scalp</option>
                                        <option value="13">inject below the skin</option>
                                        <option value="15">inject into the skin</option>
                                        <option value="25">apply on the skin</option>
                                        <option value="26">apply to the teeth</option>
                                        <option value="27">on the tongue</option>
                                        <option value="31">under the tongue</option>
                                        <option value="8">in the urethra</option>
                                        <option value="9">in the vagina</option>
                                        <option value="3">epidural</option>
                                        <option value="10">in vitro</option>
                                        <option value="16">intraarterial</option>
                                        <option value="17">intraarticular</option>
                                        <option value="18">intraocular</option>
                                        <option value="19">intraperitoneal</option>
                                        <option value="20">intrapleural</option>
                                        <option value="21">intrathecal</option>
                                        <option value="22">intrauterine</option>
                                        <option value="24">intravesical</option>
                                        <option value="28">perfusion</option>
                                        <option value="29">rinse</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2">Frequency:</label>
                                <div className="col-sm-10">
                                    <select className="form-control" ref={(input) => {this.Frequency = input}}  defaultValue={this.props.sigData.SigDosageFrequencyTypeID}>
                                        <option value="-1"></option>
                                        <option value="1">as directed</option>
                                        <option value="2">DAILY</option>
                                        <option value="5">BID</option>
                                        <option value="6">TID</option>
                                        <option value="7">QID</option>
                                        <option value="25">Q1h WA</option>
                                        <option value="8">Q4h</option>
                                        <option value="24">Q4-6h</option>
                                        <option value="9">Q6h</option>
                                        <option value="10">Q8h</option>
                                        <option value="11">Q12h</option>
                                        <option value="26">Q48h</option>
                                        <option value="23">Q72h</option>
                                        <option value="18">NIGHTLY</option>
                                        <option value="19">QHS</option>
                                        <option value="4">in A.M.</option>
                                        <option value="13">Q2h WA</option>
                                        <option value="12">EVERY OTHER DAY</option>
                                        <option value="27">2 TIMES WEEKLY</option>
                                        <option value="20">3 TIMES WEEKLY</option>
                                        <option value="14">Q1wk</option>
                                        <option value="15">Q2wks</option>
                                        <option value="16">Q3wks</option>
                                        <option value="22">Once a month</option>
                                        <option value="17">Add'l Sig</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2">Problem:</label>
                                <div className="col-sm-10">
                                    <select className="form-control" ref={(input) => {this.Problem = input}} defaultValue={this.props.sigData.SigProblemID}>
                                        <option value="-1"></option>
                                        <option value="1">for cough</option>
                                        <option value="3">for congestion</option>
                                        <option value="4">for insomnia</option>
                                        <option value="5">for anxiety</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2">Sig Information:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" ref={(input) => {this.SigInfo = input}} defaultValue={this.props.sigData.SigInformationComments} />
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success" onClick={() => this.submitForm()}>Update</Button>
                    <Button onClick={this.props.handleCloseSig}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

EditSig.defaultProps = {
        sigData: {
            SigInformationComments: '',
            SigProblemID: '',
            SigDosageActionTypeID: '',
            SigDosageFormTypeID: '',
            SigDosageFrequencyTypeID: '',
            SigDosagenumberTypeID: '',
            SigDosageRouteTypeID: ''
        }
    }

export default EditSig;


