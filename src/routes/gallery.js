import { Nav, Navbar, Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../css/home.css';
import one from '../asset/1.jpeg';
import three from '../asset/3.jpeg';
import four from '../asset/4.jpeg';
import nine from '../asset/9.jpeg';
import ten from '../asset/10.jpeg';
import eleven from '../asset/11.jpeg';
import thirteen from '../asset/13.jpeg';
import l2_1 from '../asset/I2_1.jpeg';
import p1 from '../asset/p1.jpg';
import p2 from '../asset/p2.jpg';
import p3 from '../asset/p3.jpg';
import p4 from '../asset/p4.jpg';
import p5 from '../asset/p5.jpg';
import p14 from '../asset/p14.jpg';
import p15 from '../asset/p15.jpg';
import p16 from '../asset/p16.jpg';

function Gallery() {
    
  return (
    
    <div className="Home">

        {/* Navbar */}
        <section>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
                <Container>
                    <Navbar.Brand href="/">KKF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/init">Initiatives</Nav.Link>
                            <Nav.Link className="active" href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>      

        {/* Gallery */}
        <section class="homePage">
            <Container>
            <Row>
                <Col className="homeTextBox" md={6}>
                    <div>
                        <p className="heading-tag">Gallery</p>
                        <h1>Our Gallery</h1>
                        <p>
                        We are qualified people working in different streams who wish for a change in the life of people who are in need and distressed. It is a non-profitable, non-political foundation.
                       
                        </p>
                        <Button href="#gallery" className="homeButton" variant="info">Check it out!</Button>
                    </div>
                </Col>
                
                <Col className = "homeIMGBox" md={6}>
                    <img className = "homeImg" src={ten}></img>
                </Col>
            </Row>
            </Container>
        </section>

        {/* Gallery */}
        <section className="dates" id="gallery">
            <div className ="dateBox">
                <h1>Gallery</h1>
            </div>

            <div>
                <Container>
                    <Row>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={one} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={four} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={nine} />
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={three} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={eleven} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={thirteen} />
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={l2_1} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={p1} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={p2} />
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={p3} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={p4} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={p5} />
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={p14} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={p15} />
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img className="glr" variant="top" src={p16} />
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </section>




        {/* Footer */}
        <footer class = "text-center footer">
            <p> This site is developed by
                <a href = "https://www.linkedin.com/in/sahil-garg-80b9651b1/" target="_blank">
                    <span> Sahil Garg </span>
                </a>
                <br></br>
                <span>Last updated on Oct 4, 2021</span>
                <p> &copy; 2021</p>
            </p>
        </footer>  
    </div>
  );
}

export default Gallery;
