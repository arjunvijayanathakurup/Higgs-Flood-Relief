import React, {useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import firebase from '../../firebase';
import {Redirect} from 'react-router-dom';
import Adminaid from './Adminaid'

function Adminnotiform() {
    const [content, setContent] = useState('');
    const [home, setTohome] = useState('');

    function onSubmit(e){
        const regex = /<[^>]*script/;   
        if(content.match(regex))
        {   
            return <Redirect to="/" />
        }
        else{
            
            e.preventDefault()
            firebase
            .firestore()
            .collection('notification')
            .add({
                content
            })
            .then(() => {
                setContent('')
            })
            setTohome(true);
        }
    }
    return (
        <>
            <Row>
                <Col className="formnotif">
                    <h1>Add Information</h1>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Content" value={content} onChange={e => setContent(e.currentTarget.value)}  required/>
                        </Form.Group>
                        <Button variant="success" size="lg" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Adminaid />
            </Row>
        </>
    )
}

export default Adminnotiform;