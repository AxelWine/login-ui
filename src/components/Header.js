import { Navbar, Container } from 'react-bootstrap';
import "./Header.css";

function Header() {
    return (
        <>
            <Navbar className="header-navbar header">
                <Container>
                    <Navbar.Brand href="#">Axel Corporation</Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar className="header-navbar" bg="light">
                <Container className="d-flex header-container">
                    Iniciar sesión
                </Container>
            </Navbar>
        </>
    );
};

export default Header;