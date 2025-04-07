import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
   <Container className='mt-5 text-white bg-dark'>
   <Row className='justify-content-center'>
<Col md={8} className='text-center'>
<h4>404</h4>
<p>Pagina no encontrada</p>
<div className='mt-5 d-grid mb-4'>
    <Button as={Link} to={"/home"}>
    Regresar al Inicio
    </Button>
</div>
</Col>
    </Row>
    </Container>
  )
}

export default NotFound