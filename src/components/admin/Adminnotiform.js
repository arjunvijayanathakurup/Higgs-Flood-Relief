import React, {useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import firebase from '../../firebase';
import {Redirect} from 'react-router-dom';
import Adminaid from './Adminaid'

function Adminnotiform() {
    const [content, setContent] = useState('');
    const [head, setHead] = useState('');
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
                head,
                content
            })
            .then(() => {
                setHead('')
                setContent('')
            })
            setTohome(true);
        }
    }
    return (
        <>
            <Row>
                <Col className="formnotif">
                    <h1>Add Annoucement</h1>
                    <Form >
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="text" placeholder="Heading" value={head} onChange={e => setHead(e.currentTarget.value)}  required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Content" value={content} onChange={e => setContent(e.currentTarget.value)}  required/>
                        </Form.Group>
                        <Button variant="success" size="lg" onClick={onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
                
            </Row>
        </>
    )
}

export default Adminnotiform;