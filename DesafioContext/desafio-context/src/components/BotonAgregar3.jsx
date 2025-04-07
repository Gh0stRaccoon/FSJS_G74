import React, { useContext, useState } from 'react'
import { CounterContext } from '../context/CounterContext';
import { pizzaCart } from './Pizzas';

function BotonAgregar3() {
  const [pizzasCart, setPizzaCart] = useState(pizzaCart);
      const {descuentoAplicado, IncrementInfo, DecrementInfo} = useContext(CounterContext);
  
 let salamnapoli= pricer(pizzaCart[2].price * descuentoAplicado + pizzaCart[0].price * descuentoAplicado)

      function pricer(num){
        return num.toLocaleString().replace(",",".");
      }
  
    return (
       <div className='botonAgregar'>
      <p>Precio : ${pricer(pizzaCart[2].price)}</p>
      <button onClick={IncrementInfo} >+</button>
      <p>Cantidad: {descuentoAplicado} </p>
      <p>Total {pizzaCart[2].name} : ${pricer(pizzaCart[2].price * descuentoAplicado) }</p>
          <p>{descuentoAplicado} de {pizzaCart[2].name} y {descuentoAplicado} de {pizzaCart[0].name} : ${salamnapoli}</p>
      
      <button onClick={() => DecrementInfo(descuentoAplicado-1, descuentoAplicado==false ? prevState.value -1 : 0  )} >-</button>
          </div>
    )
  }


export default BotonAgregar3