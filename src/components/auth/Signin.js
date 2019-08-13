import React, {useState} from 'react';
import firebase from '../../firebase';
import { Redirect } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import Navbar from '../navbar/Navbarlay'


function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [toHome, setTohome] = useState(false);
    
    function onLogin(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
              } else {
                alert(errorMessage);
              }
            });
        setTohome(true);
    }
    if (toHome){
        return <Redirect to="/admin" />
    }
    else{
        return (
            <>
            <Navbar />
            <div className="container" style={{paddingTop: '4%'}}>
                <h1 style={{paddingBottom: '1%'}}>Sign In</h1>
                <Form onSubmit={onLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" value={username} onChange={e => setUsername(e.currentTarget.value)} required/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.currentTarget.value)}  required/>
                    </Form.Group>
                    <Button variant="secondary" size="md" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            </>
        );
    }
}

export default Signin;