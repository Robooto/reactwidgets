import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

// 3rd party components
import { Accordion, Panel } from 'react-bootstrap';

// load actions
import { fetchSectionEditLayout } from '../actions/index';

class EditLayout extends Component {

  componentWillMount() {
    this.props.load();
  }

    onFormSubmit(props) {
        console.log(props, 'on submit');
    }

    // renderSections() {
    //     const { ChiefComplaint_Expanded, Allergies_Expanded, Medications_Expanded  } = this.props;
    //     return this.props.layout
    //         .map((section) => {
    //             return (
                    // <div className="panel panel-default" key={section.id}>
                    //     <div className="panel-heading">
                    //         <h3 className="panel-title">{`${section.title} settings`}</h3>
                    //     </div>
                    //     <div className="panel-body">
                    //         <div>
                    //             Expanded: <input type="checkbox" defaultChecked={section.expanded} />
                    //             <div className="form-control-feedback">

                    //             </div>
                    //         </div>
                    //         <div>
                    //             Show: <input type="checkbox" defaultChecked={section.show} />
                    //             <div className="form-control-feedback">

                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
    //             );
    //         });
    // }


    render() {
        console.log(this.props);
        const { handleSubmit } = this.props; 

        return (
            <div>
                <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    {/* this.renderSections() */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">{`test settings`}</h3>
                        </div>
                        <div className="panel-body">
                            <div>
                                Expanded: 
                                <Field component="input" name="ChiefComplaintSection_Expanded" type="checkbox"  />
                            </div>
                            <div>
                                Show: <Field component="input" name="ChiefComplaintSection_Show" type="checkbox"  />
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
    enableReinitialize : true
}, null, { })(EditLayout);

EditLayout = connect(
  state => ({
    initialValues: state.layout.editLayout // pull initial values from account reducer
  }),
  { load: fetchSectionEditLayout }               // bind account loading action creator
)(EditLayout)


export default EditLayout