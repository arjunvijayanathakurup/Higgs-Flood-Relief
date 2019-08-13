import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 

import firebase from '../../firebase';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const qualityType = {
  0: 'good',
  1: 'Bad',
  2: 'unknown'
};
const products =[{
  id:1,
  name:'name',
  quality:'good'
}
];
function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

export default class SelectFilter extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', defaultValue: '0' } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}