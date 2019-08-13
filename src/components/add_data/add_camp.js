import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import Navbar from '../navbar/Navbarlay';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Footer from '../footer/Footer';

function VolunteerRegistration() {
    const [district, setDistric] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [toHome, setTohome] = useState(false);


    function showPosition(position){
        
    }

    function onSubmit(e){
        const regex = /<[^>]*script/;   
        const regexnum = /^\d*$/;
        
        if(name.match(regex) || number.match(regex) || district.match(regex))
        {   
            return <Redirect to="/add_camp" />
        }
        else{
            
            e.preventDefault()
            firebase
            .firestore()
            .collection('camp')
            .add({
                district,
                name,
                number
            })
            .then(() => {
                setDistric('')
                setName('')
                setNumber('')
            })
            setTohome(true);
        }
    }
    if (toHome){
        return <Redirect to="/add_camp" />
    }
    else
    {
        return (
            <>
            <Navbar />
            <h1 style={{marginTop: '3%',marginBottom:'20px', textAlign: 'center'}}>Add Camp</h1>
            <div className="container">
                
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicname">
                    <Form.Control type="text" placeholder="Enter District" value={district} autoFocus onChange={e => setDistric(e.currentTarget.value)} required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicnumber">
                    <Form.Control type="text" placeholder="Enter Name" value={name}  onChange={e => setName(e.currentTarget.value)}  required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>   
                <Form.Group controlId="formBasiclocation">
                    <Form.Text className="text-muted" >
                    </Form.Text>
                    <Form.Control type="text" placeholder="Enter Number" value={number}  onChange={e => setNumber(e.currentTarget.value)} />
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
            <Footer/>
            </>
        )
    }
}

export default VolunteerRegistration;

