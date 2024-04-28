import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

function ProductDisplay() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="src\assets\tmpCarTest.webp" rounded style={{ width: '300px', height: '300px' }} />
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-between align-items-start"
                             style={{ marginLeft: '100px' }}>
                            <div>
                                <h2>Product Name</h2>
                                <p>Price: $99.99</p>
                                <p>Rating: 4.5/5</p>
                                <p>Description: This is a great product.</p>
                            </div>
                            <Button variant="primary">
                                <Link className="nav-link" to="/cart">
                                    Purchase
                                </Link>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <div style={{ marginTop: '50px' }}>
                    <Row>
                        <Col>
                            <h2>Product Specs</h2>
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <h2>Reviews</h2>
                            <ListGroup>
                                <ListGroup.Item>Review 1</ListGroup.Item>
                                <ListGroup.Item>Review 2</ListGroup.Item>
                                <ListGroup.Item>Review 3</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ProductDisplay;