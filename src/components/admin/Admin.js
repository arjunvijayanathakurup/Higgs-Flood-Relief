import React from 'react';
import {Container, Row, Col, Alert, Form, Button} from 'react-bootstrap';
import './admin.modules.css';
import Navbar from '../navbar/Navbarlay';
import firebase from '../../firebase';
import {Redirect} from 'react-router-dom';
import Adminnoform from './Adminnotiform';
import Admintab from './admintab';
import CompletedHelp from './CompletedHelp';
import { Tab, Tabs } from 'react-bootstrap';

function Admin() {
            return (
                <div>
                    <Navbar currentUser/>
                    <Container>
                    <Admintab/>
                    <Adminnoform />
                    <CompletedHelp/>
                    </Container>
                    <hr/>
                    <Button variant="danger" size="md" onClick={() => firebase.auth().signOut()}>
                        Signout
                    </Button>
                </div>
            )
        
}

export default Admin;