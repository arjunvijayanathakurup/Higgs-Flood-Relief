import React from 'react'
import Navbar from '../navbar/Navbarlay'
import './home.css'

 function Home() {
    return (
        <div>
            <Navbar />
            <div class="container">
            <div class="row">
                <div class="col-sm-6">
                <a href="/rescue"><div class="green-square">
                    <h1 class="title-header"> Want Help? </h1>
                </div>
                </a>
                </div>
                <div class="col-sm-6">
                <a href="/volunteer">
                <div class="yellow-square">
                    <h1 class="title-header"> Offer Help? </h1>
                    
                </div>
                </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;