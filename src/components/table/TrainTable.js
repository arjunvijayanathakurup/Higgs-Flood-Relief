import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import BootstrapTable from 'react-bootstrap-table-next';

class TrainTable extends Component {
  state = {
    products: [
      {
        tno: 1,
        name: 'TV',
        date: 1000,
        status:"Running"
      },
      {
        tno: 2,
        name: 'Mobile',
        date: 500,
        status:"Running"
      },
      {
        tno: 3,
        name: 'Book',
        date: 20,
        status:"Running"
      },
    ],
    columns: [{
      dataField: 'tno',
      text: 'Train No'
    },
    {
      dataField: 'name',
      text: 'Name'
    }, {
      dataField: 'date',
      text: 'Date',
      sort: true
    }, {
      dataField: 'status',
      text: 'Status',
      sort: true
    }]
  } 
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.products } 
        columns={ this.state.columns } />
      </div>
    );
  }
}

export default TrainTable;