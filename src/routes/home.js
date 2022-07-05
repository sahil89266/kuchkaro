import { Nav, Navbar, Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../css/home.css';
import eleven from '../asset/11.jpeg';
import fourteen from '../asset/14.jpeg';
import nine from '../asset/9.jpeg';
import one from '../asset/1.jpeg';
import thirteen from '../asset/13.jpeg';

function Home() {
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
                            <Nav.Link className="active" href="/">Home</Nav.Link>
                            <Nav.Link href="/init">Initiatives</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>

        {/* About Us */}
        <section class="homePage">
            <Container>
            <Row>
                <Col className="homeTextBox" md={6}>
                    <div>
                        <p className="heading-tag">About</p>
                        <h1>Kuch Karo Foundation</h1>
                        <p>
                        We are qualified people working in different streams who wish for a change in the life of people who are in need and distressed. It is a non-profitable, non-political foundation.
                        </p>
                        <Button href="#about" className="homeButton" variant="info">Find More</Button>
                    </div>
                </Col>
                
                <Col className = "homeIMGBox" md={6}>
                    <img className = "homeImg" src={eleven}></img>
                </Col>
            </Row>
            </Container>
        </section>

        {/* What do we do */}
        <section id="about" className="dates">
            <Container>
                <Row>
                    <Col className = "homeIMGBox" md={6}>
                        <img className = "homeImg" src={fourteen}></img>
                    </Col>

                    <Col className="aboutTextBox" md={6}>
                        <div>
                            <h1>What do we do?</h1>
                            <p>
                            The foundation helps in creating awareness about environmental affairs and issues.
                            </p>

                            <div>
                                <ul>
                                    <li> We accept and donate items of day to day needs like books, clothes, magazines, medicines, electronic goods, furniture, etc.  </li>
                                    <li> We provide counselling for family and labor disputes. </li>
                                    <li> We also provide educational and career counselling. </li>
                                </ul>
                            </div>

                            <Button href="/init" className="homeButton" variant="info">Find More</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>

        {/* Initiatives */}
        <section className="dates">
            <div className ="dateBox">
                <h1>Initiatives</h1>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nine} />
                            <Card.Body>
                                <Card.Title>Distribution</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={one} />
                            <Card.Body>
                                <Card.Title>Book Library</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col className="homeTextBox" md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={thirteen} />
                            <Card.Body>
                                <Card.Title>Women Empowerment</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Button href="/init" className="homeButton" variant="info">Learn More</Button>
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

export default Home;
