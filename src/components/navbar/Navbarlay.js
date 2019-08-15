import React from 'react'

import {Navbar, Nav} from 'react-bootstrap'
import './navstyle.css'
var navStyle = {
   
    paddingRight: "40px",
    
  };

  var navStyle2 = {
   
    paddingRight: "20px",
    
  };
  var navStyle3 = {
    paddingRight: "40px",
    paddingLeft: "20px",
    
  };
function Navbarlay() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                        <Nav.Link href ="/" className="navStyle3" >Home</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/about" className="navStyle">About</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/dashboard" className="navStyle">Dashboard</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/rescue" className="navStyle">Rescue</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/volunteer" className="navStyle">Volunteer</Nav.Link>
                    </li>
                    
                    
                </ul>
            </div>
            <div className="mx-auto order-0">
            <Navbar.Brand link href="/" ><img src="./logowhite.png" alt="not loaded" style={{width:"190px", height: "70px"}}/>
            {/* <Navbar.Brand className="navbar-brand mx-auto" href="/">  Human Foundation &nbsp; </Navbar.Brand> */}
            </Navbar.Brand>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    
                    <li className="nav-item">
                        <Nav.Link className="nav-link" href="/signin" className="navStyle2"></Nav.Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbarlay