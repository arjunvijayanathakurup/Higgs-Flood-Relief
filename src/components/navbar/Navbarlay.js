import React from 'react'

import {Navbar, Nav} from 'react-bootstrap'
function Navbarlay() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Nav.Link href ="/">Home</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/about">About</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/rescue">Rescue</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/volunteer">Volunteer</Nav.Link>
                    </li>
                    
                </ul>
            </div>
            <div className="mx-auto order-0">
            {/* <Navbar.Brand link to="https://www.higgs.in" ><img src="https://www.higgs.in/images/LogoSm-min.png" alt="" style={{width:"130px", height: "50px"}}/> */}
            <Navbar.Brand className="navbar-brand mx-auto" href="/">  Human Foundation &nbsp; </Navbar.Brand>
            {/* </Navbar.Brand> */}
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    
                    <li className="nav-item">
                        <Nav.Link className="nav-link" href="/signin">Sign In</Nav.Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbarlay