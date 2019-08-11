import React from 'react';
import {Container, Row, Col, Alert, Form, Button} from 'react-bootstrap';
import './admin.modules.css';
import Navbar from '../navbar/Navbarlay';
import firebase from '../../firebase';
import {Redirect} from 'react-router-dom';
import Adminnoform from './Adminnotiform';

function Admin() {
    
    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col sm className="colHead"><h4>Help needed</h4></Col>
                    <Col sm className="colHead"><h4>Volunteers</h4></Col>
                    <Col sm className="colHead"><h4>AID</h4></Col>
                    <Col sm className="colHead"><h4>Announcements</h4></Col>
                </Row>
                <Row>
                    <Col sm className="col">
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>

                    </Col>
                    <Col sm className="col">
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>

                    </Col> <Col sm className="col">
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>

                    </Col> <Col sm className="col">
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>
                        <Alert variant="dark">
                            New user added
                        </Alert>

                    </Col>
                </Row>
                <Adminnoform />
            </Container>
        </div>
    )
}

export default Admin;