import React, {useState, useEffect} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import firebase from '../../firebase';
import {Redirect} from 'react-router-dom';
import Adminaid from './Adminaid';

function Delete(number){
    const [announcement, setAnnouncement] = useState([]);

    
    
}

function CompletedHelp() {
    const [rescueData,setRescue] = useState('');
    const [content, setContent] = useState('');
    const [home, setTohome] = useState('');
    useEffect(() =>{
        const unsubscribe = firebase
        .firestore().collection('rescue-needed').onSnapshot((snapshot) => {
            const newRescue = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()
            }))
            setRescue(newRescue)
        })
        return () => unsubscribe()
    }, [])
    function onSubmit(e){
        const regex = /<[^>]*script/;   
        if(content.match(regex))
        {   
            return <Redirect to="/" />
        }
        else{
            for(const v of rescueData)
            {
                if(v.number===content)
                    firebase.firestore().collection('rescue-needed').doc(v.id).delete();
            }
            setContent('');
            
        }
    }
    return (
        <>
            <Row>
                <Col className="formnotif">
                    <h1>Completed Help</h1>
                    <Form >
                        <Form.Group controlId="formBasicNumber">
                            <Form.Control type="text" placeholder="Number" value={content} onChange={e => setContent(e.currentTarget.value)}  required/>
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

export default CompletedHelp;