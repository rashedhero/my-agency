import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className="d-flex bg-warning ">
           
            <div className="col-md-5">
            <h1>Let us Handle your project  ,professionally </h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque ex ipsum aliquam quod ea.</p>
            </div>

            <div className="col-md-6">
      
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Your email address" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Your Name/Company Name" />
  </Form.Group>
 
  <Button className="mb-10" variant="dark" type="submit">
    Send
  </Button>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
            </div>

            
        </section>
    );
};

export default Footer;
