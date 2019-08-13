import React, {useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import firebase from '../../firebase';
import {Redirect} from 'react-router-dom';
import Adminaid from './Adminaid'

function Adminnotiform() {
    const [heading, setHeading] = useState('');
    const [content, setContent] = useState('');
    const [home, setTohome] = useState('');

    function onSubmit(e){
        const regex = /<[^>]*script/;   
        if(heading.match(regex) || content.match(regex))
        {   
            return <Redirect to="/" />
        }
        else{
            
            e.preventDefault()
            firebase
            .firestore()
            .collection('notification')
            .add({
                heading,
                content
            })
            .then(() => {
                setHeading('')
                setContent('')
            })
            setTohome(true);
        }
    }
    return (
        <>
            <Row>
                <Col className="formnotif">
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Heading" value={heading} onChange={e => setHeading(e.currentTarget.value)} required/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

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