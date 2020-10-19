import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../../images/carousel-1.png';
import image2 from '../../../images/carousel-2.png';
import image3 from '../../../images/carousel-3.png';
import image4 from '../../../images/carousel-4.png';
import image5 from '../../../images/carousel-4.png';
import './WorkingActivites.css'

const WorkingActivities = () => {
    return (
  
        < div className="carousel">
            <h5>here are some of <span>our works</span> </h5>
     <AliceCarousel autoPlay autoPlayInterval="1000">
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>
      <img src={image5} className="sliderimg" alt=""/>
    </AliceCarousel>
        </div>

    )
};

export default WorkingActivities;