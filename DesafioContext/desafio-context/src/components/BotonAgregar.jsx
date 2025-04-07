import React, { useContext, useState } from 'react'
import InfoProvider, { CounterContext } from '../context/CounterContext';
import NavbaroAlgo from './NavbaroAlgo';
import { pizzaCart } from './Pizzas';

function BotonAgregar() {

<InfoProvider>
    <NavbaroAlgo/>
    </InfoProvider>


  const [pizzasCart, setPizzaCart] = useState(pizzaCart);
    const {descuentoAplicado, IncrementInfo, DecrementInfo} = useContext(CounterContext);

    let totalnapo= pricer(pizzaCart[0].price * descuentoAplicado)
   let totalnapespa= pricer(pizzaCart[0].price * descuentoAplicado + pizzaCart[1].price * descuentoAplicado)
   let todaslaspizzas= pricer(pizzaCart[0].price * descuentoAplicado + pizzaCart[1].price * descuentoAplicado + pizzaCart[2].price * descuentoAplicado)
    function pricer(num){
      return num.toLocaleString().replace(",",".");
    }

  return (
    <div className='botonAgregar'>
<p>Precio : ${pricer(pizzaCart[0].price)}</p>
<button className='BtnUno' onClick={IncrementInfo} >+</button>
<p>Cantidad: {descuentoAplicado} </p>
<p>Total  {pizzaCart[0].name} : ${totalnapo}</p>
<p >Total {pizzaCart[1].name} : ${pricer(pizzaCart[1].price * descuentoAplicado) }</p>
<p>{descuentoAplicado} de {pizzaCart[0].name} y {descuentoAplicado} de {pizzaCart[1].name} : ${totalnapespa}</p>
<p>{descuentoAplicado} de {pizzaCart[0].name} , {descuentoAplicado} de {pizzaCart[1].name} y {descuentoAplicado} de {pizzaCart[2].name}  : ${todaslaspizzas}</p>
<button onClick={() => DecrementInfo(descuentoAplicado-1, descuentoAplicado==false ? prevState.value -1 : 0  )} >-</button>
    </div>

  )
}




export default BotonAgregar