import { Nav, Navbar, Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../css/home.css';
import fifteen from '../asset/15.jpeg';

function Contact() {
  let link = "https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

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
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link className="active" href="/contact">Contact</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>

         {/* Get in Touch */}
         <section class="homePage">
            <Container>
                <Row>
                    <Col className="homeTextBox" md={6}>
                        <div>
                            <p className="heading-tag">Contact Us</p>
                            <h1>Get in Touch</h1>
                            <p>
                            We are qualified people working in different streams who wish for a change in the life of people who are in need and distressed. It is a non-profitable, non-political foundation.
                       
                            </p>
                            <Button href="#team" className="homeButton" variant="info">Contact Us</Button>
                        </div>
                    </Col>
                    
                    <Col className = "homeIMGBox" md={6}>
                        <img className = "homeImg" src={fifteen}></img>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Teams */}
        <section className="dates" id="team">
            <div className ="dateBox">
                <h1>Our Team</h1>
                
            </div>

            <div>
                <Container>
                    <Row>
                        <Col className="ContactBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={link} />
                            <Card.Body>
                                <Card.Title className="contactTitle">Adv. Krishan Sangruri</Card.Title>
                                <Card.Text>
                                Co-Founder & Chairman KKF
                                <p className="social">9872661047</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col className="ContactBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={link} />
                            <Card.Body>
                                <Card.Title className="contactTitle">Manoj Kumar Goyal</Card.Title>
                                <Card.Text>
                                Co-Founder KKF

                                <p className="social">9815980322</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col className="ContactBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={link} />
                            <Card.Body>
                                <Card.Title className="contactTitle">Akhil Goyal</Card.Title>
                                <Card.Text>
                                Member KKF

                                <p className="social">9855654322</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </section>

        {/* Connect */}
        <section className="dates">
            <div className ="dateBox">
                <h1>Connect with Us</h1>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col className="ContactBox" md={6}>
                            <Card style={{ width: '18rem' }}>
                            <div className="icon"><i class="fas fa-map-marker-alt"></i></div>
                            <Card.Body>
                                <Card.Title className="contactTitle">Address</Card.Title>
                                <Card.Text>
                                148001 Sangrur, Punjab, India
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col className="ContactBox" md={6}>
                            <Card style={{ width: '18rem' }}>
                            <div className="icon"><i class="fas fa-phone-square-alt"></i></div>
                            <Card.Body>
                                <Card.Title className="contactTitle">Contact Number</Card.Title>
                                <Card.Text>
                                98726 61047
                                </Card.Text>
                            </Card.Body>
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

export default Contact;
