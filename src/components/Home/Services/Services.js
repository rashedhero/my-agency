import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import './Services.css'
const Services = () => {
    return (
        <div className="row">
        <div className="just-items-center,justify-content-center">
            <h4 > Provide awesome <span>services </span> </h4>
        <CardDeck>
        
        <Card >
          <Card.Img  className="w-25 mx-auto"  variant="top" src={service1} 
         
         />
          
          <Card.Body >
          
           
            <Card.Text >
             <small className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, est nulla delectus ipsam odio obcaecati.</small>
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card className ="W-40 ">
          <Card.Img  className="w-25 mx-auto"  variant="top" src={service2}  />
          <Card.Body>
               
            <Card.Text className ="W-50">
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img className="w-25 mx-auto"  variant="top" src={service3}  />
          
          <Card.Body>
           
            <Card.Text>
              <small >This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.</small>
            </Card.Text>
          </Card.Body>
          
        </Card>
      </CardDeck>
      </div>

      </div>
    );
};

export default Services;