import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';

import PatientHeader from '../containers/patient_header';
import ProgressNoteHeader from '../containers/progress_note_header';


import AllergySection from '../components/allergy_section';
import MedicationSection from '../components/medication_section';

export default class App extends Component {

  renderSections() {
    return [{ id: 1, title: 'Allergies', component: <AllergySection />, expanded: true },{ id: 2, title: 'Medications', component: <MedicationSection />, expanded: true }].map((section) => {
      return (
          <Panel key={section.id} collapsible defaultExpanded={section.expanded} header={section.title}>
            {section.component}
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
