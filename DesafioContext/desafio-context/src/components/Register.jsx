import React, { useState } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Register () {
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const [nombre, setNombre] = useState("");
 return (
<Container className='mt-5 text-white bg-dark'>
    <Row className='justify-content-center text white'>
        <Col md={9}>
<h2>Registro</h2>
<Form>
<Form.Group controlId='formBasicNombre'>
<Form.Label>Nombre</Form.Label>
<Form.Control
type='text'
placeholder='Ingrese su nombre'
value={nombre}
onChange={(e)=> setNombre(e.target.value)}
/>
</Form.Group>

<Form.Group controlId='formBasicEmail'>
<Form.Label>Email</Form.Label>
<Form.Control
type='email'
placeholder='ingrese su email'
value={email}
onChange={(e)=> setEmail(e.target.value)}
/>

</Form.Group>

<Form.Group controlId='formBasicPassword'>
<Form.Label>Contraseña</Form.Label>
<Form.Control
type='password'
placeholder='ingrese su contraseña'
value={password}
onChange={(e)=> setPassword(e.target.value)}
/>

</Form.Group>

<Button variant="dark" type='submit' className='mt-3 text-black bg-white'>
Registrarse
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

export default Register