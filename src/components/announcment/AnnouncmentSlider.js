import React, {useState, useEffect} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import firebase from '../../firebase';
import {Alert} from 'react-bootstrap';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

const styles = { height: 400, width: "100%" };
function useAnnouncement(){
    const [announcement, setAnnouncement] = useState([]);

    useEffect(() =>{
        const unsubscribe = firebase
        .firestore().collection('notification').onSnapshot((snapshot) => {
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
              <Slider classNames={horizontalCss} autoplay={300}>
                  {announcement.map((announcement) =>
                    <div key={announcement.id} style={{ background: ` no-repeat center center` }}>
                      <div className="center">
                      <h1>{announcement.head}</h1>
                      <p>
                      <Alert variant="dark">
                          {announcement.content}
                      </Alert>
                      </p>
                      </div>
                    </div>
                  )}
              </Slider>
            </div> 
    )
}



export default NewAnnouncment
