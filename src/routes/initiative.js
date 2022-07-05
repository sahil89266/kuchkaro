import { Nav, Navbar, Container, Row, Col, Button} from 'react-bootstrap';
import '../css/home.css';
import three from '../asset/3.jpeg';
import nine from '../asset/9.jpeg';
import one from '../asset/1.jpeg';
import thirteen from '../asset/13.jpeg';

function Initiative() {
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
                            <Nav.Link className="active" href="/init">Initiatives</Nav.Link>
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
                        <p className="heading-tag">Initiatives</p>
                        <h1>Our Initiatives</h1>
                        <p>
                        We are qualified people working in different streams who wish for a change in the life of people who are in need and distressed. It is a non-profitable, non-political foundation. 
                        </p>
                        <Button href="#about" className="homeButton" variant="info">Find More</Button>
                    </div>
                </Col>
                
                <Col className = "homeIMGBox" md={6}>
                    <img className = "homeImg" src={three}></img>
                </Col>
            </Row>
            </Container>
        </section>

        {/* What do we do */}
        <section id="about" className="dates">
            <Container>
                <div className ="dateBox">
                    <h1>Initiatives</h1>
                </div>

                <Row className="init">
                    <Col className = "homeIMGBox" md={6}>
                        <img className = "homeImg" src={nine}></img>
                    </Col>

                    <Col className="aboutTextBox" md={6}>
                        <div>
                            <h1>Distribution</h1>
                            <p>
                                Not everyone enjoys the benefits we do. While some of us have the luxury to sit in our homes and not worry about expenses, there are many out there who have to work everyday outside in this pandemic to make ends meet. It is to help those families and individuals that we at Kuch Karo Foundation collect eatables, clothes, blankets, items of day to day activities and distribute them among those in need of them. Our efforts may not be enough but we hope that a day will come when no-one will have to struggle for basic necessities. Till then, our efforts won’t stop. 
                            </p>                          
                        </div>
                    </Col>
                </Row>

                <Row className="init">
                    <Col className="aboutTextBox" md={6}>
                        <div>
                            <h1>Book Library</h1>
                            <p>
                            A separate Book Library is running which contains the books for all age groups, study groups spanning from Class - 1 to 12, competitions JEE, NEET, CLAT, CA, CAT, SSC etc. and Higher education - Engineering, MBBS, Bcom, Law, Arts etc.  Students can either visit the library and read here or they can issue books and return after reading. This initiative is being taken care by Sh. Kuldeep Goyal.
                            </p>
                        </div>
                    </Col>

                    <Col className = "homeIMGBox" md={6}>
                        <img className = "homeImg" src={one}></img>
                    </Col>
                </Row>

                <Row className="init">
                    <Col className = "homeIMGBox" md={6}>
                        <img className = "homeImg" src={thirteen}></img>
                    </Col>

                    <Col className="aboutTextBox" md={6}>
                        <div>
                            <h1>Women Empowerment</h1>
                            <p>
                            For empowerment and upliftment of underprivileged and marginalised women, KKF has started a new initiative. KKF helps and supports these women by helping them sell handicraft items like wallets, bags, handbags, purses, baskets, clothes, mobile support covers, etc. produced by them. These are great alternatives for polythene-based products, help in environmental conservation and a source of income. But most importantly it provides purpose to the lives of these women. 
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>
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

export default Initiative;
