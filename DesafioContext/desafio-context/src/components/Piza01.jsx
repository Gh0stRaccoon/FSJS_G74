import React, { useEffect, useState } from 'react'
import {  Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Home from './Home'

function Piza001() {
    const [infos1, setInfoDescripcion1] = useState('');
    const [infos2, setInfoImagen2] = useState('');
    const [infos3, setInfoPrecio3] = useState('');
    const [infos4, setInfoIngred4] = useState('');

 useEffect(() => {
  consultarApis1();
  
 }, []);

 const consultarApis1 = async () =>{
    try {
      const url = "http://localhost:5000/api/pizzas/p001"
      const response = await fetch(url);
      const data = await response.json();
      
      setInfoDescripcion1(`${data.name}, ${data.desc}`)
      setInfoImagen2(`${data.img}`)
      setInfoPrecio3(`${data.price}`)
      setInfoIngred4(`${data.ingredients}`)
    } catch (error) {
      console.error('hubo un error', error)
      
    }
}

const style1 ={
    width: '360px',
    height:'500px',
    backgroundColor: 'green',
    margin: 'auto',
    color: 'black',
    display: "inline-flex"
    
    
    
   }

  return (
    <div className="cards">
       
    
         <div className="card" style={style1}>
          
         <p className="info"><span>Pizza </span>{infos1}</p>

         <img src={infos2} alt="" height={'230px'} />
         <h6 className="ingredientes">Ingredientes: {infos4}</h6>
         <h5 className="Precio">${infos3}</h5>
         <Button className="btnCarrito mt-2" style={{backgroundColor:"red"}} as={Link} to={"/cart"}>Agregar Al carrito</Button>

         <div className='mt-5 d-grid mb-4'>
    <Button as={Link} to={"/home"}>
    Regresar al Inicio</Button>
    
</div>
         </div>

         </div>
         

         
  )
}

export default Piza001