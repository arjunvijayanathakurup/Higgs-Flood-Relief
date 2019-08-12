import React from 'react'
import Navbar from '../navbar/Navbarlay'
import {Link} from 'react-router-dom'
import './about.css'

 function About() {
    return (
        <div >
            <Navbar />
            <div className="container">
                <div className="row about-section">
                    <div className="col-sm-8 ">
                        <h1 className="header">Motivation </h1> 
                        
                        <div className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Sapiente laudantium natus voluptates aperiam aspernatur vel repellat aut? Culpa cupiditate ipsa cum ad inventore perspiciatis in dolorum consequuntur consectetur, 
                            ex exercitationem!
                        </div>
                        <hr/>
                        <h1 className="header">The HUMAN Foundation</h1> 
                        
                        <div className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Sapiente laudantium natus voluptates aperiam aspernatur vel repellat aut? Culpa cupiditate ipsa cum ad inventore perspiciatis in dolorum consequuntur consectetur, 
                            ex exercitationem!
                        </div>
                        <hr/>
                    </div>
                    
                    <div className="col-sm-4">
                        <h1 className="header"> Join Us</h1> 
                        
                        <div className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Sapiente laudantium natus voluptates aperiam aspernatur vel repellat aut? Culpa cupiditate ipsa cum ad inventore perspiciatis in dolorum consequuntur consectetur, 
                            ex exercitationem!
                        </div>
                        <hr/>
                        
                    </div>
                    <hr/>
                    <div className="col-sm-12">
                        <h1 className="header"> HIGGS - The Particle Company</h1> 
                        
                        <div className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Sapiente laudantium natus voluptates aperiam aspernatur vel repellat aut? Culpa cupiditate ipsa cum ad inventore perspiciatis in dolorum consequuntur consectetur, 
                            ex exercitationem!
                        </div>
                        <hr/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;