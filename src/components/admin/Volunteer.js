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
        .firestore().collection('volunteer').onSnapshot((snapshot) => {
            const newRescue = snapshot.docs.map((doc) =>({
                ...doc.data()
            }))
            setAnnouncement(newRescue)
        })
        return () => unsubscribe()
    }, [])
    return announcement;
}

function Volunteer() {
    const { SearchBar } = Search;
    const rescues = useRescue();
    const columns= [
    {
      dataField: 'name',
      text: 'Name',
      sort: true
      
    }, {
      dataField: 'number',
      text: 'Number',
    
    }, {
      dataField: 'email',
      text: 'Email',
    },{
      dataField: 'address',
      text: 'Address',
    },{
      dataField: 'district',
      text: 'District',
    }];
    return (
            
      <div className="container" style={{ marginTop: 50 }}>
      <ToolkitProvider
        keyField="id"
        data={ rescues }
        columns={ columns }
        search={ { defaultSearch: 'Kollam' } }
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
   
    )
}

export default Volunteer;