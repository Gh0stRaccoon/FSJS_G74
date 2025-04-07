import React, { createContext, useState } from 'react'
import { pizzaCart } from '../components/Pizzas';

export const InfoContext = createContext();

const InfcontProvider = ({ children }) => {
  const [pizzasCart, setPizzaCart] = useState(pizzaCart);
  const [descuentoAplicado1, setDescuentoAplicado] = useState(0);

  function pricer(num){
    return num.toLocaleString().replace(",",".");
    
  }


  const IncrementInfo1 = () => {
    setDescuentoAplicado(descuentoAplicado1+1 );
  };
  const TotalInfo = () => {
    setDescuentoAplicado(pricer(pizzaCart[0].price * descuentoAplicado1));
  };

return(
<InfoContext.Provider value={{ descuentoAplicado1, IncrementInfo1, TotalInfo,}}>
    {children}
  </InfoContext.Provider>
  );



  };

export default InfcontProvider