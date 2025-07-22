import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap";


function Header() {
    return (
        <Navbar variant="dark" expand="lg" className="bg-dark" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"></i> Log In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;