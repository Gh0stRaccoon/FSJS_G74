import { useState } from 'react'
import { Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Navegador from './components/Navegador';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Piza001 from './components/Piza01';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import InfoProvider from './context/CounterContext';
import BotonAgregar from './components/BotonAgregar';
import { pizzaCart } from './components/Pizzas';
import BotonAgregar2 from './components/BotonAgregar2';
import BotonAgregar3 from './components/BotonAgregar3';



function App() {
  

  return (
    <>
    <div> 
   
    <Header/>

    <InfoProvider>
    <Navegador/>

    <div className='prueba'>
    <div className='divCart'>
    <h5>Pizza {pizzaCart[0].name}</h5>
      <img className='Imagenes' src={pizzaCart[0].img} alt="" height={"250px"} />

      <BotonAgregar/>
      
      </div>
      <div className='divCart'>
    <h5>Pizza {pizzaCart[1].name}</h5>
    <img className='Imagenes' src={pizzaCart[1].img} alt="" height={"250px"} />
    <InfoProvider>
    <BotonAgregar2/>
    
    </InfoProvider>  
      </div>

      <div className='divCart'>
    <h5>Pizza {pizzaCart[2].name}</h5>
    <img className='Imagenes' src={pizzaCart[2].img} alt="" height={"250px"} />
    <InfoProvider>
    <BotonAgregar3/>
    </InfoProvider>
    
    </div>
      </div>
      <Routes>
   
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/home"} element={<Home/>}/>
      <Route path={"/register"} element={<Register/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"*"} element={<NotFound/>}/>
      <Route path={"/p001"} element={<Piza001/>}/>
      <Route path={"/cart"} element={<Cart/>}/>
      <Route path={"/profile"} element={<Profile/>}/>

     
     </Routes>




     </InfoProvider>
     </div>
      
    </>
  )
}

export default App
