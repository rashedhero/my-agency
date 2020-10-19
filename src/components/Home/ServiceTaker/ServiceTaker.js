import React from 'react';
import airbnb from '../../../images/logos/airbnb.png'
import Netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png' 
import Google from '../../../images/logos/google.png'
import './ServiceTaker.css'
const ServicesTaker = () => {
    return (
        <div className="section">
        <div className="w-50 row justify-content-between mb-150px">
        <img  class="img"src={Google} alt=""  className="img"/> 
        <img  class="img"src={airbnb} alt=""  className="img"/> 
        <img  class="img"src={Netflix} alt=""  className="img"/> 
        <img  class="img"src={slack} alt=""  className="img"/> 
      
        </div>
        </div>
    );
};

export default ServicesTaker;