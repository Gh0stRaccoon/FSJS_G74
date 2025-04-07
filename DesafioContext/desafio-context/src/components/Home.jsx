import { useContext, useEffect, useState } from "react";
import {  Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";




function Home() {

 

const [info1, setInfoDescripcion] = useState('');
const [info2, setInfoImagen] = useState('');
const [info3, setInfoPrecio] = useState('');
const [info4, setInfoIngred] = useState('');

const [infopiz1, setInfoDescrip] = useState('');
const [infopiz2, setInfoImag] = useState('');
const [infopiz3, setInfoPrez] = useState('');
const [infopiz4, setInfoIngrd] = useState('');

const [infopizza1, setInfoPdesc] = useState('');
const [infopizza2, setInfoPimag] = useState('');
const [infopizza3, setInfoPprec] = useState('');
const [infopizza4, setInfoPingrd] = useState('');

        
 useEffect(() => {
  consultarApi();
  consultarApi2();
  consultarApi3();
 }, []);
 

 const consultarApi3 = async () =>{
  try {
    const url = "http://localhost:5000/api/pizzas/p003"
    const response = await fetch(url);
    const data = await response.json();
    
    setInfoPdesc(`${data.name}, ${data.desc}`)
    setInfoPimag(`${data.img}`)
    setInfoPprec(`${data.price}`)
    setInfoPingrd(`${data.ingredients}`)
  } catch (error) {
    console.error('hubo un error', error)
    
  }
  
   }






 const consultarApi2 = async () =>{
  try {
    const url = "http://localhost:5000/api/pizzas/p002"
    const response = await fetch(url);
    const data = await response.json();
    
   setInfoDescrip(`${data.name}, ${data.desc}`)
   setInfoImag(`${data.img}`)
   setInfoPrez(`${data.price}`)
   setInfoIngrd(`${data.ingredients}`)
  } catch (error) {
    console.error('hubo un error', error)
    
  }
  
   }


 const consultarApi = async () =>{
try {
  const url = "http://localhost:5000/api/pizzas/p001"
  const response = await fetch(url);
  const data = await response.json();
  
 setInfoDescripcion(`${data.name}, ${data.desc}`)
 setInfoImagen(`${data.img}`)
 setInfoPrecio(`${data.price}`)
 setInfoIngred(`${data.ingredients}`)
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
          
         <p className="info"><span>Pizza </span>{info1}</p>

         <img src={info2} alt="" height={'230px'} />
         <h6 className="ingredientes">Ingredientes: {info4}</h6>
         <h5 className="Precio">${info3}</h5>

         <Button className="btnCarrito mt-4" style={{backgroundColor:"red"}} as={Link} to={"/cart"} >Agregar Al carrito</Button>
         
      
         
         </div>

         <div className="card" style={style1}>
          
         <p className="info"><span>Pizza </span>{infopiz1}</p>

         <img src={infopiz2} alt="" height={'212px'} />
         <h6 className="ingredientes">Ingredientes: {infopiz4}</h6>
         <h5 className="Precio">${infopiz3}</h5>
         <Button className="btnCarrito mt-2" style={{backgroundColor:"red"}} as={Link} to={"/cart"}>Agregar Al carrito</Button>
         

         
         </div>

         <div className="card" style={style1}>
          
         <p className="info"><span>Pizza </span>{infopizza1}</p>

         <img src={infopizza2} alt="" height={'212px'} />
         <h6 className="ingredientes">Ingredientes: {infopizza4}</h6>
         <h5 className="Precio">${infopizza3}</h5>
         <Button className="btnCarrito mt-2" style={{backgroundColor:"red"}} as={Link} to={"/cart"}>Agregar Al carrito</Button>
         


         </div>
         
  
  
  
      </div>
  
      
    )
  }
  
  export default Home