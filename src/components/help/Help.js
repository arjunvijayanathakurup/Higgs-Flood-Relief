import React, {useState, useEffect} from 'react'
import firebase from '../../firebase'
import Navbar from '../navbar/Navbarlay';
import {Alert, Table} from 'react-bootstrap'
var divStyle =  {
   
    paddingTop: "20px",
    
  };

function useRescue(){
    const [announcement, setAnnouncement] = useState([]);

    useEffect(() =>{
        const unsubscribe = firebase
        .firestore().collection('rescue-needed').onSnapshot((snapshot) => {
            const newRescue = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()
            }))
            setAnnouncement(newRescue)
        })
        return () => unsubscribe()
    }, [])
    return announcement;
}

function Help() {
    const rescues = useRescue();
    return (
            <div>
            <Navbar/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <header className="card-header"> 
                                <h4 className="card-title mt-2">Help Needed</h4>
                            </header>
                            <article className="card-body">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Name</th>
                                        <th>Number</th>
                                        <th>Details/Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {rescues.map((rescue, index) =>
                                        <tr key={index}>
                                        <td>{rescue.name}</td>
                                        <td>{rescue.number}</td>
                                        <td>{rescue.details?rescue.details:rescue.location}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                    </Table>

                            </article>
                        </div> 
                    </div> 
                </div>
            </div> 
   
    )
}

export default Help;