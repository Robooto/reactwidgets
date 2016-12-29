import React, { Component } from 'react';
import { connect } from 'react-redux';

import PatientHeader from '../containers/patient_header';
import ProgressNoteHeader from '../containers/progress_note_header';
import SectionLayout from '../components/section_layout';


class App extends Component {

  render() {
    return (
      <div>
        <PatientHeader />
        <ProgressNoteHeader />
        <SectionLayout />
      </div>
    );
  }
}


export default connect(null, { })(App);