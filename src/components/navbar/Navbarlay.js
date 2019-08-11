import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
function Navbarlay() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand link to="https://www.higgs.in" ><img src="https://www.higgs.in/images/LogoSm-min.png" alt="" style={{width:"130px", height: "50px"}}/></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href ="/">Home</Nav.Link>
                <Nav.Link href="/rescue">Rescue</Nav.Link>
                <Nav.Link href="/volunteer">Volunteer</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navbarlay