import React, {useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import firebase from '../../firebase';
import {Redirect} from 'react-router-dom';

function Adminaid() {
    const [heading, setHeading] = useState('');
    const [contact, setContact] = useState('');
    const [location, setLocation] = useState('');
    const [home, setTohome] = useState('');

    function onSubmit(e){
        const regex = /<[^>]*script/;   
        if(heading.match(regex) || contact.match(regex) || location.match(regex))
        {   
            return <Redirect to="/" />
        }
        else{
            
            e.preventDefault()
            firebase
            .firestore()
            .collection('aid')
            .add({
                heading,
                contact,
                location
            })
            .then(() => {
                setHeading('')
                setContact('')
                setLocation('')
            })
            setTohome(true);
        }
    }
    return (
        <>
            
                <Col className="formnotif">
                    <Form onSubmit={onSubmit}>
                        <Form.Label>Add AID Info</Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Name" value={heading} onChange={e => setHeading(e.currentTarget.value)} required/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Contact" value={contact} onChange={e => setContact(e.currentTarget.value)}  required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Location" value={location} onChange={e => setLocation(e.currentTarget.value)}  required/>
                        </Form.Group>
                        <Button variant="success" size="lg" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                
            
        </>
    )
}

export default Adminaid;