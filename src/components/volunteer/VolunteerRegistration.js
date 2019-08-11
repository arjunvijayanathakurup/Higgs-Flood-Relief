import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import firebase from '../../firebase';
import { Redirect } from 'react-router-dom';
import Navbar from '../navbar/Navbarlay'

function VolunteerRegistration() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [toHome, setTohome] = useState(false);


    function onSubmit(e){
        const regex = /<[^>]*script/;   
        const regexnum = /^\d*$/;
        if(name.match(regex) || number.match(regex) || address.match(regex))
        {   
            return <Redirect to="/" />
        }
        else{
            e.preventDefault()
            firebase
            .firestore()
            .collection('higgs-flood-relief')
            .add({
                name,
                number,
                email,
                address,
            })
            .then(() => {
                setName('')
                setNumber('')
                setEmail('')
                setAddress('')
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
            <div style={{marginTop: '5%', width: '30%', height: '50%', marginLeft: '35%'}}>
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
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email (Optional)" value={email}  onChange={e => setEmail(e.currentTarget.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Home Address" value={address} onChange={e => setAddress(e.currentTarget.value)} required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted">
                    </Form.Text>
                <Button variant="danger" size="lg" type="cancel">
                    Cancel
                </Button>
            </Form>
            </div>
            </>
        )
    }
}

export default VolunteerRegistration;
