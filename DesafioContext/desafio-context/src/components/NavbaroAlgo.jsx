/*
----NAVBAR DE PRUEBA QUE NO SE USO---

import React, { useContext, useState } from 'react'
import { pizzaCart } from './Pizzas';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { CounterContext } from '../context/CounterContext';

function NavbaroAlgo() {

    
  const [pizzasCart, setPizzaCart] = useState(pizzaCart);
const { descuentoAplicado, IncrementInfo} = useContext(CounterContext);

const total = 0;
const token = false;     
     
  return (
    <>
   
    {
        token==true ? 
      <Navbar bg="light" data-bs-theme="light">
    <Container>
   <Navbar.Brand as={Link} to={"/"}>Pizzeria Mamma Mia</Navbar.Brand>
   <Navbar.Collapse id='basic-navbar-nav'>
   <Nav className='ml-auto'>
      <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
      <Nav.Link as={Link} to={"/"}>Logout</Nav.Link>
      <Nav.Link as={Link} to={"/cart"}>Total: $ <p>{pizzaCart[0].price * descuentoAplicado}</p></Nav.Link>
      <div className='mt-5 d-grid mb-4'>
            <Button onClick={IncrementInfo}>
            </Button>
            </div>
      
   </Nav>
  </Navbar.Collapse>
    </Container>
  </Navbar>
        
        : 
        
        <Navbar bg="light" data-bs-theme="light">
        <Container>
       <Navbar.Brand as={Link} to={"/"}>Pizzeria Mamma Mia</Navbar.Brand>
       <Navbar.Collapse id='basic-navbar-nav'>
       <Nav className='ml-auto'>
          <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
          <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
          <Nav.Link as={Link} to={"/cart"}>Total: ${pizzaCart[0].price * descuentoAplicado}</Nav.Link>
          <div className='mt-5 d-grid mb-4'>
            <Button onClick={IncrementInfo}>
            </Button>
            </div>
       
       </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>
        
     
    } 




  
</>

); 
};
  


export default NavbaroAlgo

*/