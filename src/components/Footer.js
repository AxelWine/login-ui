import { Navbar, Container } from 'react-bootstrap';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <Navbar>
                <Container>
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                            <a href="#">Política de Privacidad</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;