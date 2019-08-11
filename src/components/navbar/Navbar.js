import React from 'react'

function Navbar() {
    return (
        <div>
        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">Human Founation</a>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Want Help? <span class="caret"></span></a>
                <ul class="dropdown-menu">
                <li><a href="#">Rescue</a></li>
                <li><a href="#">Medical</a></li>
                <li><a href="#">Supplies</a></li>
                </ul>
            </li>
            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Offer Help <span class="caret"></span></a>
                <ul class="dropdown-menu">
                <li><a href="#">Volunteer</a></li>
                <li><a href="#">Supplies</a></li>
                <li><a href="#">Service</a></li>
                </ul>
            </li>
            <li><a href="#">Notifications</a></li>

            </ul>
            <ul class="nav navbar-nav navbar-right">
            
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
        </nav>
        </div>
    )
}

export default Navbar