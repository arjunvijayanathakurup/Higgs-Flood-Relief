import React, {useState} from 'react';
import {Link} from 'react-router-dom'
function Footer(){
	return(
	<footer class="app-footer" style={{backgroundColor: '#343a40  ', color:'rgba(255, 255, 255, 0.5)'}}>
  <div>
    <span>&copy; 2019 The Human Foundation.</span>
  </div>
  <div class="ml-auto">
    <span>Powered by</span>
    <Link to="https://www.higgs.in"> <span style={{ color:'rgba(255, 255, 255, 0.5)'}} >HIGGS</span></Link>
  </div>
</footer>
)
}
export default Footer;