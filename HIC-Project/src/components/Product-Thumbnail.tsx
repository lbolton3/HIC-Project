import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Car Name</Card.Title>
        <Card.Text>
          Car Price
        </Card.Text>
        <Button variant="primary">
          <Link className="nav-link" to="/product">
            Product Page
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
