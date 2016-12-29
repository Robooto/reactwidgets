import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Panel } from 'react-bootstrap';

import { fetchSectionLayout } from '../actions/index';

import PatientHeader from '../containers/patient_header';
import ProgressNoteHeader from '../containers/progress_note_header';


import AllergySection from '../components/allergy_section';
import MedicationSection from '../components/medication_section';

const widgets = {
  'AllergySection': AllergySection,
  'MedicationSection': MedicationSection
};

class App extends Component {

  componentWillMount() {
    this.props.fetchSectionLayout();
  }

  renderSections() {
    console.log(this.props);
    return this.props.layout.map((section) => {
      return (
          <Panel key={section.id} collapsible defaultExpanded={section.expanded} header={section.title}>
            {React.createElement(widgets[section.component])}
          </Panel>
      );
    });
  }


  render() {
    return (
      <div>
        <PatientHeader />
        <ProgressNoteHeader />
        {this.renderSections()}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { layout: state.layout.layout };
}


export default connect(mapStateToProps, { fetchSectionLayout })(App);