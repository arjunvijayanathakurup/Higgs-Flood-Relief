import React from 'react'
import Navbar from '../navbar/Navbarlay'
import './home.css'

 function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
            <div className="row">
                <div className="col-sm-6">
                <a href="/rescue"><div className="green-square">
                    <h1 className="title-header"> Want Help? </h1>
                </div>
                </a>
                </div>
                <div className="col-sm-6">
                <a href="/volunteer">
                <div className="yellow-square">
                    <h1 className="title-header"> Offer Help? </h1>
                    
                </div>
                </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;