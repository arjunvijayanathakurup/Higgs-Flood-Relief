import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import firebase from '../../firebase';
import { Redirect } from 'react-router-dom';
import Navbar from '../navbar/Navbarlay';
import Footer from '../footer/Footer';

function VolunteerRegistration() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
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
            .collection('volunteer')
            .add({
                name,
                number,
                email,
                address,
                district
            })
            .then(() => {
                setName('')
                setNumber('')
                setEmail('')
                setAddress('')
                setDistrict('')
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
            <h1 style={{marginTop: '3%',marginBottom:'20px', textAlign: 'center'}}>Volunteer Registration</h1>
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
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email (Optional)" value={email}  onChange={e => setEmail(e.currentTarget.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter District" value={district} onChange={e => setDistrict(e.currentTarget.value)} required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Text className="text-muted">
                    </Form.Text>
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
                <Button variant="secondary" size="md" type="submit" style={{ marginRight: '10px',marginTop: '10px'}}>
                    Submit
                </Button>
                
                <Button variant="light" size="md" type="cancel" style={{ marginTop: '10px'}}>
                    Cancel
                </Button>
            </Form>
            </div>
            <Footer/>
            </>
        )
    }
}

export default VolunteerRegistration;
