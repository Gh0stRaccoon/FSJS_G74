import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Profile() {
    const [email1, setEmail1] = useState("");

  return (
    <Container className='mt-5 text-white bg-dark'>
        <Row className="justify-content-center text-white">
            <Col md={8}>
            <h2>Tu Perfil</h2>

            <Form>
                <Form.Group controlId='formBasicEmail1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type='Email'
                    placeholder='emailrandom@gmail.com'
                    value={email1}
                    onChange={(e)=> setEmail1(e.target.value)}/>

                    </Form.Group>

    

            </Form>
            
            <div className='mt-5 d-grid mb-4'>
            <Button as={Link} to={"/home"}>
            Cerrar Sesion
            </Button>
            </div>
            </Col>

        </Row>


    </Container>
  )
}

export default Profile