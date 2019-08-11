import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div class="site-wrap" id="home-section">
        <div class="site-mobile-menu site-navbar-target">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>
        <header class="site-navbar site-navbar-target" role="banner">
          <div class="container">
            <div class="row align-items-center position-relative">
              <div class="col-3 ">
                <div class="site-logo">
                  <a href="index.html">Human Foundations</a>
                </div>
              </div>
              <div class="col-9  text-right">
                <span class="d-inline-block d-lg-none"><a href="#" class="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span class="icon-menu h3 text-white"></span></a></span>
                <nav class="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                  <ul class="site-menu main-menu js-clone-nav ml-auto ">
                    <li class="active"><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="about.html" class="nav-link">About</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div class="ftco-blocks-cover-1">
          <div class="ftco-cover-1 overlay bg_main">
          </div>
          <div class="site-section pt-0 pb-0">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <form class="trip-form">
                    <div class="row align-items-center mb-4">
                      <div class="col-md-6">
                        <h3 class="m-0">Need Rescue</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-md-3">
                        <span>Name</span><span class="form-required">*</span>
                        <input type="text" id="name" name="name" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_3" required="" />
                      </div>
                      <div class="form-group col-md-3">
                        <span>Contact Number</span><span class="form-required">*</span>
                        <input type="text" id="number" name="contactNumber" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
                      </div>
                      <div class="form-group col-md-3">
                        <span>Location</span><span class="form-required">*</span>
                        <input type="text" id="location" name="location" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
                      </div>
                      <div class="form-group col-md-3">
                        <span>Message</span><span class="form-required">*</span>
                        <input type="text" id="message" name="message" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <input type="submit" value="Submit" class="btn btn-primary"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
            </div>
          </div>
          <div class="site-section pt-0 pb-0">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <form class="">
                    <div class="row align-items-center mb-4">
                      <div class="col-md-6">
                        <h3 class="m-0">Volunteer Registration</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-md-3">
                        <span>Name</span><span class="form-required">*</span>
                        <input type="text" id="name" name="name" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_3" required="" />
                      </div>
                      <div class="form-group col-md-3">
                        <span>Contact Number</span><span class="form-required">*</span>
                        <input type="text" id="number" name="contactNumber" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
                      </div>
                      <div class="form-group col-md-3">
                        <span>Email</span><span class="form-required">(Optional)</span>
                        <input type="text" id="name" name="email" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_3" required="" />
                      </div>
                      <div class="form-group col-md-3">
                        <span>Location</span><span class="form-required">*</span>
                        <input type="text" id="location" name="location" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
                      </div>
                      <div class="form-group col-md-3">
                        <span>Address</span><span class="form-required">*</span>
                        <input type="text" id="address" name="address" data-type="input-textbox" class="form-control validate[required]" size="35" value="" placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
                      </div>
                      <div class="form-group col-md-3">
                        <span>Field of Work</span><span class="form-required">*</span>
                        <select class="form-dropdown form-control" id="input_11" name="q11_typeA"  data-component="dropdown" aria-labelledby="label_11">
                          <option value="">  </option>
                          <option value="Food"> Food </option>
                          <option value="Rescue"> Rescue </option>
                          <option value="Accommodation"> Accommodation </option>
                          <option value="Travel"> Travel </option>
                          </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <input type="submit" value="Submit" class="btn btn-primary"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
