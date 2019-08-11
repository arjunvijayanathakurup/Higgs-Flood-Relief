import React from 'react'
import Navbar from '../navbar/Navbarlay'
import './home.css'

 function Home() {
    return (
        <div>
            <Navbar />
            <div class="row">
                <div class="col-sm-6 green-square">
                    <a href="">
                    <h1 class="title-header"> Want Help? </h1>
                    
                    </a>
                </div>
                <div class="col-sm-6 yellow-square">
                    <a href="">
                    
                    <h1 class="title-header"> Offer Help? </h1>
                    
                    
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;