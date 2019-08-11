import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import firebase from '../../firebase';
import { Redirect } from 'react-router-dom';

function VolunteerRegistration() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [lat, setLat] = useState('');
    const [log, setLog] = useState('');
    const [details, setDetails] = useState('');
    const [toHome, setTohome] = useState(false);


    function onSubmit(e){
        const regex = /<[^>]*script/;   
        const regexnum = /^\d*$/;
        if(name.match(regex) || number.match(regex) || details.match(regex))
        {   
            return <Redirect to="/" />
        }
        else{
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    console.log(position.coords);
                    // console.log(position.coords.longitude)
                    lat = position.coords.latitude;
                    log = position.coords.longitude;
                });
            }
            else{
                console.log("location not allowed")
            }
            e.preventDefault()
            firebase
            .firestore()
            .collection('rescue-needed')
            .add({
                name,
                number,
                lat,
                log,
                details
            })
            .then(() => {
                setName('')
                setNumber('')
                setLat('')
                setLog('')
                setDetails('')
            })
            setTohome(true);
        }
    }
    if (toHome){
        return <Redirect to="/" />
    }
    else
    {
        return (
            <div style={{marginTop: '15%', width: '30%', height: '50%', marginLeft: '35%'}}>
                <h1>Volunteer Registration</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicname">
                    <Form.Control type="text" placeholder="Enter Full name" value={name} autoFocus onChange={e => setName(e.currentTarget.value)} required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicnumber">
                    <Form.Control type="text" placeholder="Enter phone number" value={number}  onChange={e => setNumber(e.currentTarget.value)}  required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicemail">
                    <Form.Control type="email" placeholder="Enter email (Optional)" value={details}  onChange={e => setDetails(e.currentTarget.value)} />
                    <Form.Text className="text-muted" >
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit"> onChange={e=> setLat()}
                    Submit
                </Button>
                <Button variant="danger" size="lg" type="cancel">
                    Cancel
                </Button>
            </Form>
            </div>
        )
    }
}

export default VolunteerRegistration;
