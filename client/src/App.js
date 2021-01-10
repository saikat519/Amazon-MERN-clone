import React,{ useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import axios from './axios'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Orders from './components/Orders/Orders'
import Payment from './components/Payment/Payment'
import Login from './components/Login/Login'
import Delivary from './components/Delivary/Delivary'
import {auth} from './firebase'
import { useStateValue } from "./StateProvider"; 
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


// Stripe Public Key
const promise = loadStripe(
   process.env.STRIPE_PK
  );



function App() {

  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    
  const getProduct = async()=>{
      
    const response = await axios.get('/products')
      
      dispatch({
        "type":"SET_PRODUCTS",
        "products":response.data
      })
     
  }
  
  const getCarousel = async()=>{
    
    const response = await axios.get('/carousel')
      
      dispatch({
        "type":"SET_CAROUSEL",
        "carousel":response.data
      })
    
   
  }

   

    getProduct();
    getCarousel();
    
    console.log(process.env)
    auth.onAuthStateChanged((authUser) => {
     

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type:"EMPTY_CART"
        })
      }
    });
   
  }, [dispatch]);


  return (
    <Router>    
    <div className="app">
      <Switch>
      <Route path="/cart">
        <Header />
        {!user && <Login />}
        {user && <Cart />}
        <Footer />
      </Route>

      <Route path="/delivary-location">
        
        {!user && <Login />}
        {user && <Delivary />}
        
      </Route>

      <Route path="/payment">
        <Header />
        {!user && <Login />}

        <Elements stripe={promise}>
            {user && <Payment />}
        </Elements>
        
        <Footer />
        
      </Route>

      <Route path="/login">
          {!user && <Login />}
      </Route>

      <Route path="/orders">
              <Header />
              <Orders />
              <Footer />
        </Route>

       <Route path="/">
              <Header />
              <Home />
              <Footer />
        </Route>
       
      </Switch>
    </div>
    </Router>

    
  );
}




export default App;
