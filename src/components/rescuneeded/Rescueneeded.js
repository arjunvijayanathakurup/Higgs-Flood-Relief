import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import Navbar from '../navbar/Navbarlay';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

function VolunteerRegistration() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [lat, setLat] = useState('');
    const [log, setLog] = useState('');
    const [details, setDetails] = useState('');
    const [toHome, setTohome] = useState(false);
    const [loc, setLocation] = useState('true');
    console.log(loc);
    function setradio()
    {
        if(loc)
        {
            setLocation(false);
            setDetails("Enter location if not current location");
        }
        else
        {
            setDetails("Enter location");
            setLocation(true);
        }
    }
    function onSubmit(e){
        const regex = /<[^>]*script/;   
        const regexnum = /^\d*$/;
        
        if(name.match(regex) || number.match(regex) || details.match(regex))
        {   
            return <Redirect to="/" />
        }
        else{
            if(details)
            {
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    console.log(position.coords);
                    // console.log(position.coords.longitude)
                    setLat(position.coords.latitude);
                    setLog(position.coords.longitude);
                });
            }
            else{
                console.log("location not allowed")
            }
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
            <>
            <Navbar />
            <h1 style={{marginTop: '3%',marginBottom:'20px', textAlign: 'center'}}>Rescue Needed</h1>
            <div className="container">
                
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
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="use current location" onChange={e => setradio()} style={{color: 'black'}}/>
                </Form.Group>   
                <Form.Group controlId="formBasiclocation">
                    <Form.Text className="text-muted" >
                    </Form.Text>
                    <Form.Control type="text" placeholder="Enter location if not current location" value={details}  onChange={e => setDetails(e.currentTarget.value)} />
                    <Form.Text className="text-muted" >
                    </Form.Text>
                </Form.Group>
                <Button variant="secondary" size="md" type="submit" style={{ marginRight: '10px',marginTop: '10px'}}>
                    Submit
                </Button>
                <Button variant="light" size="md" type="cancel" style={{ marginTop: '10px'}}>
                    Cancel
                </Button>
            </Form>
            </div>
            </>
        )
    }
}

export default VolunteerRegistration;

