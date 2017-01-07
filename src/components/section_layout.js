import React, { Component } from 'react';
import { connect } from 'react-redux';

// 3rd party components
import { Panel } from 'react-bootstrap';
import _ from 'lodash';

// load actions
import { fetchSectionLayout, addSection } from '../actions/index';

// Load available widgets
import AllergySection from './wigets/allergy_section';
import MedicationSection from './wigets/medication_section';
import ChiefComplaintSection from './wigets/chief_complaint_section';

// mapper for POC could be additional reducer
const WIDGETS = {
  'AllergySection': AllergySection,
  'MedicationSection': MedicationSection,
  'ChiefComplaintSection': ChiefComplaintSection
};

class SectionLayout extends Component {


  componentWillMount() {
    this.props.fetchSectionLayout();
  }

  onAddWidgetClick() {
    let id = _.uniqueId('test_');
    this.props.addSection([{
        id: id,
        title: 'Medications',
        component: 'MedicationSection',
        expanded: false,
        show: true
    }]);
  }

  onAddWidgetClickExpanded() {
    let id = _.uniqueId('test_');
    this.props.addSection([{
        id: id,
        title: 'Chief Complaint',
        component: 'ChiefComplaintSection',
        expanded: true,
        show: true
    }]);    
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
        <div style={{marginBottom: 10}}>
          <button onClick={() => this.onAddWidgetClick()} className="btn btn-primary">Add Widget</button>
          <button onClick={() => this.onAddWidgetClickExpanded()} style={{ marginLeft: 10 }} className="btn btn-primary">Add Widget Expanded</button>        
        </div>
        {this.renderSections()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return { sections: state.layout.sections };
}

export default connect(mapStateToProps, { fetchSectionLayout, addSection })(SectionLayout);