import React, { useContext, useState } from 'react'
import { CounterContext } from '../context/CounterContext';
import { pizzaCart } from './Pizzas';

function BotonAgregar2() {

  const [pizzasCart, setPizzaCart] = useState(pizzaCart);
    const {descuentoAplicado, IncrementInfo, DecrementInfo} = useContext(CounterContext);

    let totalespasalam= pricer(pizzaCart[1].price * descuentoAplicado + pizzaCart[2].price * descuentoAplicado)
    function pricer(num){
      return num.toLocaleString().replace(",",".");
    }

  return (
     <div className='botonAgregar'>
    <p>Precio : ${pricer(pizzaCart[1].price)}</p>
    <button onClick={IncrementInfo} >+</button>
    <p>Cantidad: {descuentoAplicado} </p>
    <p>Total {pizzaCart[1].name} : ${pricer(pizzaCart[1].price * descuentoAplicado) }</p>
    <p>{descuentoAplicado} de {pizzaCart[1].name} y {descuentoAplicado} de {pizzaCart[2].name} : ${totalespasalam}</p>
    <button onClick={() => DecrementInfo(descuentoAplicado-1, descuentoAplicado==false ? prevState.value -1 : 0  )} >-</button>
        </div>
  )
}

export default BotonAgregar2