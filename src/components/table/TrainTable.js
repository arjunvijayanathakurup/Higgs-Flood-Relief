import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import firebase from '../../firebase';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

function TrainTable() {
  const { SearchBar } = Search;
    const columns= [{
      dataField: 'tno',
      text: 'Train No',
     
    },
    {
      dataField: 'name',
      text: 'Name',
      
    }, {
      dataField: 'date',
      text: 'Date',
      sort: true
    }, {
      dataField: 'status',
      text: 'Status',
      sort: true
    }];
  const [details, setDetails] = useState([]);
  useEffect(() =>{
        const unsubscribe = firebase
        .firestore().collection('train').onSnapshot((snapshot) => {
            const newRescue = snapshot.docs.map((doc) =>({
                ...doc.data()
            }))
            setDetails(newRescue);
        })
        return () => unsubscribe()
    }, []);
  
    return (
      <div className="container" style={{ marginTop: 50 }}>
      <ToolkitProvider
        keyField="id"
        data={ details }
        columns={ columns }
        search={ { defaultSearch: '123' } }
      >
        {
          props => (
            <div>
            <h3>Search:</h3>
              <SearchBar { ...props.searchProps } />
              <hr />
              <BootstrapTable
                { ...props.baseProps }
              />
            </div>
          )
        }
      </ToolkitProvider>
      </div>
    );
  
}

export default TrainTable;