import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';


// load actions
import { fetchSectionEditLayout, updateLayoutSettings } from '../actions/index';

class EditLayout extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.load();
    }

    onFormSubmit(props) {
        console.log(props, 'on submit');

        this.props.updateLayoutSettings(props);
        this.context.router.push('/');
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    {/* this.renderSections() */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Chief Complaint Settings</h3>
                        </div>
                        <div className="panel-body">
                            <div>
                                Expanded:
                                <Field component="input" name="ChiefComplaintSection_expanded" type="checkbox" />
                            </div>
                            <div>
                                Show: <Field component="input" name="ChiefComplaintSection_show" type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Allergy Section Settings</h3>
                        </div>
                        <div className="panel-body">
                            <div>
                                Expanded:
                                <Field component="input" name="AllergySection_expanded" type="checkbox" />
                            </div>
                            <div>
                                Show: <Field component="input" name="AllergySection_show" type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Medication Section Settings</h3>
                        </div>
                        <div className="panel-body">
                            <div>
                                Expanded:
                                <Field component="input" name="MedicationSection_expanded" type="checkbox" />
                            </div>
                            <div>
                                Show: <Field component="input" name="MedicationSection_show" type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                        <Link to="/" style={{ marginLeft: 10 }} className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}


function validate(values) {
    const errors = {};

    console.log(values, 'validate');

    return errors;
}



EditLayout = reduxForm({
    form: 'EditLayoutForm',
    validate,
    enableReinitialize: true
}, null, {})(EditLayout);

EditLayout = connect(
    state => ({
        initialValues: state.layout.settings // pull initial values from account reducer
    }),
    { load: fetchSectionEditLayout, updateLayoutSettings }               // bind account loading action creator
)(EditLayout)


export default EditLayout