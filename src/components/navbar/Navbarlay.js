import React from 'react'

import {Navbar, Nav} from 'react-bootstrap'

var navStyle = {
   
    paddingRight: "40px",
    
  };

  var navStyle2 = {
   
    paddingRight: "20px",
    
  };
  var navStyle3 = {
    paddingRight: "40px",
    paddingRight: "20px",
    
  };
function Navbarlay() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Nav.Link href ="/" style={navStyle3}>Home</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/about" style={navStyle}>About</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/rescue" style={navStyle}>Rescue</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="/volunteer" style={navStyle}>Volunteer</Nav.Link>
                    </li>
                    
                </ul>
            </div>
            <div className="mx-auto order-0">
            <Navbar.Brand link to="https://www.higgs.in" ><img src="./logowhite.png" alt="not loaded" style={{width:"190px", height: "70px"}}/>
            {/* <Navbar.Brand className="navbar-brand mx-auto" href="/">  Human Foundation &nbsp; </Navbar.Brand> */}
            </Navbar.Brand>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    
                    <li className="nav-item">
                        <Nav.Link className="nav-link" href="/signin" style={navStyle2}>Sign In</Nav.Link>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbarlay