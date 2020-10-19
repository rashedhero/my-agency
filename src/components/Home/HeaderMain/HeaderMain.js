import React from 'react';
import Frame from '../../../images/logos/Frame.png' 

const HeaderMain = () => {
    return (
        <div style={{height:'500px'}}className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
        <h1 className={{color: 111430}}>Lets grow your <br/>
            Brand to the  <br/>
            Next Level
            
        </h1>
        
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi molestiae nulla? Expedita, alias assumenda!</p>
        <button type="button" class="btn btn-dark">Hire us</button>
        </div>
          <div className="col-md-6">
           <img src={Frame} alt="" className="img-fluid"/>
               
           

            </div>
            
       </div>

    );
};

export default HeaderMain;