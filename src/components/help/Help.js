import React, {useState, useEffect} from 'react'
import firebase from '../../firebase'
import Navbar from '../navbar/Navbarlay';
import {Alert, Table} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
var divStyle =  {
   
    paddingTop: "20px",
    
  };

function useRescue(){
    const [announcement, setAnnouncement] = useState([]);

    useEffect(() =>{
        const unsubscribe = firebase
        .firestore().collection('rescue-needed').onSnapshot((snapshot) => {
            const newRescue = snapshot.docs.map((doc) =>({
                ...doc.data()
            }))
            setAnnouncement(newRescue)
        })
        return () => unsubscribe()
    }, [])
    return announcement;
}

function Help() {
    const { SearchBar } = Search;
    const rescues = useRescue();
    const columns= [
    {
      dataField: 'name',
      text: 'Name',
      
    }, {
      dataField: 'number',
      text: 'Number',
    
    }, {
      dataField: 'details',
      text: 'Details',
      sort: true
    }];
    return (
            
      <div className="container" style={{ marginTop: 50 }}>
      <ToolkitProvider
        keyField="id"
        data={ rescues }
        columns={ columns }
        search
      >
        {
          props => (
            <div>
            <h3>Search:</h3>
              <SearchBar { ...props.searchProps } />
              <hr />
              <div style={{overflow: 'auto'}}>
                <BootstrapTable 
                  { ...props.baseProps }
                />
              </div>
            </div>
          )
        }
      </ToolkitProvider>
      </div>
   
    )
}

export default Help;