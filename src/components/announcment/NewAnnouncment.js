import React from 'react'
import Navbar from '../navbar/Navbarlay'
var divStyle = {
   
    paddingTop: "20px",
    
  };
function NewAnnouncment() {
    return (
            <div>
            <Navbar/>
            <div className="container" style={divStyle}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <header className="card-header"> 
                                <h4 className="card-title mt-2">New Announcement</h4>
                            </header>
                            <article className="card-body">
                            <form action="/newordersubmit">
                                
                                <div className="form-row">
                                    
                                    <div className="col form-group">
                                        <label>Name</label>
                                        <input name="id" type="text" className="form-control"/>	
                                    </div> 
                                    <div className="col form-group">
                                        <label>Phone number</label>
                                        <input name="sem" type="Number" className="form-control" placeholder=""/>
                                    </div>
                                </div> 
                                <div className="form-row">
                                    
                                    <div className="col form-group">
                                        <label>Email</label>
                                        <input name="hostel" type="text" className="form-control" placeholder=""/>	
                                    </div> 
                                    <div className="col form-group">
                                        <label>Announcement Type</label>
                                        <input name="room" type="text" className="form-control" placeholder=""/>
                                    </div>
                                </div> 
                        
                                <div className="form-row">
                                    
                                    <div className="col form-group">
                                        <label>Location</label>
                                        <input name="pillow" type="text" className="form-control" placeholder=" "/>
                                    </div>
                                </div> 
                                
                                <div className="col form-group">
                                        <label>Announcement Details</label>
                                        <input name="pillow" type="text" className="form-control" placeholder=""/>
                                </div>
                                
                                
                                <hr/>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-block"> Submit  </button>
                                </div>
                                                                
                            </form>
                    </article>
            </div> 

        </div> 

        </div>
        </div> 
        </div>
    )
}

export default NewAnnouncment