import { Navbar, Container } from 'react-bootstrap';
import "./Header.css";

function Header() {
    return (
        <>
            <Navbar bg="light">
                <Container className="header-container">
                    Iniciar sesión
                </Container>
            </Navbar>
        </>
    );
};

export default Header;