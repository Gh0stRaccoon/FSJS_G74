import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
  return (
    <Container className='mt-5 text-white bg-dark'>
        <Row className='justify-content-center text-white'>
            <Col md={8}>
            <h2>Iniciar Sesion</h2>
            <Form>
        <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
            type='Email'
            placeholder='ingrese su email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            </Form.Group>  

            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                type='password'
                placeholder='contraseña'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>
                
                </Form.Group>
                <Button type='submit' className='mt-3'>
                    Iniciar Sesion
                    </Button>      

                    <div className='mt-5 d-grid mb-4'>
    <Button as={Link} to={"/home"}>
    Regresar al Inicio</Button>
    
</div>



            </Form>
            
            
            </Col>

        </Row>


    </Container>
  )
}

export default Login