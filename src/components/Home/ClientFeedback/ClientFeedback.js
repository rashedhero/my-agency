import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

const ClientFeedback = () => {
    return (
      <section>
        <h4>Client Feedback</h4>
    
        <CardDeck >
        <Card>
          <Card.Img  className="w-25"  variant="top" src={customer1} 
          
         
          />
          
          <Card.Body>
          <span>Nash Patrick</span>
           
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card className ="W-50">
          <Card.Img  className="w-25"  variant="top" src={customer2} />
          <Card.Body>
               
            <Card.Text className ="W-50">
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img className="w-25"  variant="top" src={customer3} />
          <Card.Body>
           
            <Card.Text>
              <small>This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.</small>
            </Card.Text>
          </Card.Body>
          
        </Card>
      </CardDeck>
      
      </section>
    );
};

export default ClientFeedback;