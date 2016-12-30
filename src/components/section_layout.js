import React, { Component } from 'react';
import { connect } from 'react-redux';

// 3rd party components
import { Accordion, Panel } from 'react-bootstrap';

// load actions
import { fetchSectionLayout } from '../actions/index';

// Load available widgets
import AllergySection from './wigets/allergy_section';
import MedicationSection from './wigets/medication_section';
import ChiefComplaintSection from './wigets/chief_complaint_section';

const WIDGETS = {
  'AllergySection': AllergySection,
  'MedicationSection': MedicationSection,
  'ChiefComplaintSection': ChiefComplaintSection
};

class SectionLayout extends Component {

  componentWillMount() {
    this.props.fetchSectionLayout();
  }

  renderSections() {
    return this.props.sections
      .filter((item) => item.show)
      .map((section) => {
        return (
          <Panel key={section.id} collapsible defaultExpanded={section.expanded} header={section.title}>
            {React.createElement(WIDGETS[section.component])}
          </Panel>
        );
      });
  }


  render() {
    return (
      <div>
        {this.renderSections()}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { sections: state.layout.sections };
}


export default connect(mapStateToProps, { fetchSectionLayout })(SectionLayout);