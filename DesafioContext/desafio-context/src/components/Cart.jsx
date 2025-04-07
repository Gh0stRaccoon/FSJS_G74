import React, { useState } from 'react'
import { pizzaCart } from './Pizzas';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import InfoProvider from '../context/CounterContext';
import BotonAgregar from './BotonAgregar';
import BotonAgregar2 from './BotonAgregar2';
import BotonAgregar3 from './BotonAgregar3';
import NavbaroAlgo from './NavbaroAlgo';
import Navegador from './Navegador';


function Cart({pizzac, setTotal, cuponPromo}) {
  
 const [pizzasCart, setPizzaCart] = useState(pizzaCart);
 const [pizza, setPizza] = useState("");
 

 

  
const total=pizzaCart.reduce(
  (acc, pizza) => acc + pizza.price * pizza.count, 0);

const cantidad = pizzaCart.reduce(
  (acc, pizza) => acc + pizza.count, 0);

  function pricer(num){
    return num.toLocaleString().replace(",",".");
  }


  function eliminar(params) {

    //filtrar el arreglo para excluir la tarea con el id dado
    const nuevasTareas = pizzasCart.filter((jorge) => jorge.id !== params.id);
    setPizzaCart(nuevasTareas);
    
  }
  
 //Esto entrega la lista de pedidos y como eliminaralos del carrito  pero muestra el div con los pedidos repetido 3 veces
  /*const mostrarLista =   pizzasCart.map((t) => 
    (<li key={t.id} > {t.completada === false ? t.name : "" } 
    <img className='Imagenes'  src={t.img} height={'150px'} width={'50px'} alt="" />
    <p>Precio: ${t.price}</p>
    <button onClick={() => setDescuentoAplicado(descuentoAplicado+1)}>+</button>
    <p >{descuentoAplicado}</p>
    <button onClick={() => setDescuentoAplicado(descuentoAplicado-1, descuentoAplicado==false ? prevState.value -1 : 0  )}>-</button>
    <p>Total: {pricer(pizzac.price * descuentoAplicado )}</p>
    <button onClick={() => eliminar(t) } >eliminar del Carrito</button>
    
    </li>));
*/

/*return ( 
<>
<ul>{mostrarLista}</ul>
</>
*/

  return (
    
    <>




    

  


   
 

    
    </>
  )
}

export default Cart