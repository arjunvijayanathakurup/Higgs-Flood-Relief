import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import BootstrapTable from 'react-bootstrap-table-next';

class PoliceTable extends Component {
  state = {
    products: [
      {
        District: 1,
        name: 'TV',
        number: 1000
      },
      {
        District: 2,
        name: 'Mobile',
        number: 500
      },
      {
        District: 3,
        name: 'Book',
        number: 20
      },
    ],
    columns: [{
      dataField: 'District',
      text: 'District'
    },
    {
      dataField: 'name',
      text: 'Name'
    }, {
      dataField: 'number',
      text: 'number',
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

export default PoliceTable;