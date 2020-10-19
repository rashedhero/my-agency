import React from 'react';
import ClientsFeedback from './ClientFeedback/ClientFeedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import Services from './Services/Services';
import ServiceTaker from './ServiceTaker/ServiceTaker';
import WorkingActivities from './WorkingActivities/WorkingActivities';

const Home = () => {
    return (
        <div >
          <Header></Header> 
          <ServiceTaker ></ServiceTaker>
          <Services></Services>
          <WorkingActivities></WorkingActivities>
          <ClientsFeedback></ClientsFeedback>
          <Footer></Footer>
      
        </div>
    );
};

export default Home;