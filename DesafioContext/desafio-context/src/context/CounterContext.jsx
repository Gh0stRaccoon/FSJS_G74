import React, { createContext, useState } from 'react'
import { pizzaCart } from '../components/Pizzas';

export const CounterContext = createContext();

 
const InfoProvider = ({ children }) => {
  const [pizzasCart, setPizzaCart] = useState(pizzaCart);
  
  const [descuentoAplicado, setDescuentoAplicado] = useState(0);
 

  const IncrementInfo = () => {
    setDescuentoAplicado(descuentoAplicado+1 );
  };

  const DecrementInfo = () => {
    setDescuentoAplicado(descuentoAplicado - 1 );
  };

  




return(
<CounterContext.Provider value={{ descuentoAplicado, IncrementInfo, DecrementInfo }}>
    {children}
  </CounterContext.Provider>

);

};



export default InfoProvider;