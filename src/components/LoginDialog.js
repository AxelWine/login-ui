import { Form, Button, Row } from 'react-bootstrap';
import "./LoginDialog.css";

function LoginDialog() {
  return (
    <div className="login-center">
        <div className="login-content">
            <img className="login-content-icon" src="images/login.png" width="48"></img>
            <h3 className="login-content-title">Iniciar sesión</h3>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Control type="email" placeholder="Correo electrónico"/>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Control type="password" placeholder="Contraseña"/>
                </Form.Group>
                
                <Button as={Row} variant="primary" className="login-content-button">
                    Iniciar sesión
                </Button>
            </Form>

            o<br/>
            <a href="#">Crea una cuenta</a>
        </div>
    </div>
  );
}

export default LoginDialog;