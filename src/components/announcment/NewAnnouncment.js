import React, {useState, useEffect} from 'react'
import firebase from '../../firebase'
import Navbar from '../navbar/Navbarlay';
import {Alert} from 'react-bootstrap'
var divStyle =  {
   
    paddingTop: "20px",
    
  };

function useAnnouncement(){
    const [announcement, setAnnouncement] = useState([]);

    useEffect(() =>{
        const unsubscribe = firebase
        .firestore().collection('announcements').onSnapshot((snapshot) => {
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

function NewAnnouncment() {
    const announcement = useAnnouncement();
    return (
            <div>
            <Navbar/>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <header className="card-header"> 
                                <h4 className="card-title mt-2">New Announcement</h4>
                            </header>
                            <article className="card-body">
                                {announcement.map((announcement) =>
                                    <Alert variant="dark">
                                        {announcement.details}

                                    </Alert>
                                )}
                            </article>
                        </div> 
                    </div> 
                </div>
            </div> 
    )
}

export default NewAnnouncment