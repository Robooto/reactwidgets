/*
* Patient Header place holder
*/
import React from 'react';
import { Link } from 'react-router';

const divStyle = {
    height: 100
};

export default (props) => {
    return (
        <div style={divStyle}>
            <h3>Patient Chart Header</h3>
            <Link to="/editlayout">
                Edit Page Layout
            </Link>
        </div>
    )
};