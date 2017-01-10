import React, { Component } from 'react';


/**
 * Action button helper
 */

export class GridActionButton extends Component {
  render() {
    const { rowData, rowIndex, type, onClick } = this.props;
    return (
        <i 
            role="button" 
            className={`glyphicon glyphicon-${type}`} 
            onClick={() => onClick(rowData, rowIndex)}>
        </i>
    );
  }
}