/**
 * Mapping for react router
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import PageContainer from '../components/page_container';
import EditLayout from '../components/edit_layout';

export default (
    <Route path="/" component={PageContainer}>
        <IndexRoute component={App} />
        <Route path="/editlayout" component={EditLayout} />
    </Route>
);