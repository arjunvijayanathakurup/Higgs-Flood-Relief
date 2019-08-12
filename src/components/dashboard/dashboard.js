import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import Navbar from '../navbar/Navbarlay';
import Announcment from '../announcment/AnnouncmentSlider';
import TabList from '../Tab/Tab';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './dashboard.css';


function VolunteerRegistration() {
    
        return (
            <>
            <Navbar />
            <div className="container">
                <TabList/>
            </div>
            </>
        )
}

export default VolunteerRegistration;

