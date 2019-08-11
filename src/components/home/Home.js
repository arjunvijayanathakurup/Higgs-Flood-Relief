import React from 'react'
import Navbar from '../navbar/Navbarlay'
import {Link} from 'react-router-dom'
import './home.css'

 function Home() {
    return (
        <div>
            <Navbar />
            <div class="row">
                <div class="col-sm-6 green-square">
                    <Link to="/rescue">
                    <h1 class="title-header"> Need Help? </h1>
                    </Link>
                </div>
                <div class="col-sm-6 yellow-square">
                    <Link to="/rescue">
                        <h1 class="title-header"> Offer Help? </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;