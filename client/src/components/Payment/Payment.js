import React, { useState, useEffect } from 'react'
import './Payment.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import { getCartTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';
import FlipMove from 'react-flip-move';
import { Button } from 'react-bootstrap';
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { db } from '../../firebase'


const Payment= (() => {

    const [{ user,cart,city,mobileNumber,address,pinCode,landMark,name },dispatch] =  useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    var cartPrice = 0;
    cart.map(item => 
        cartPrice += item.price
    );

    const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        .then(({ paymentIntent }) => {

            db
              .collection('users')
              .doc(user?.uid)           // user has uid nor id to check log user
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  cart: cart,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            console.log(payload)

            dispatch({
                type: 'EMPTY_CART'
            })

            history.replace('/orders')
        })

    }

    const handleChange = (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in smallest unit in any currency
                // in INR 1 = 100 paisa
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)  
        }

        getClientSecret();
        // console.log("here is clientSecret : ",clientSecret);
    }, [cart])

    

    return (
        <div className='payment'>
            <div className="payment__container">
            
            
                <h3>
                    Your Cart (
                        <Link to="/cart">{cart?.length} items</Link>
                        )
                </h3>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h5>Delivery Address</h5>
                    </div>
                    <div className='payment__address'>
                        <p>Name : {name}</p>
                        <p>Phone : {mobileNumber}</p>
                        <p>Landmark : {landMark}</p>
                        <p>City : {city}</p>   
                        <p>Pincode : {pinCode}</p>
                        <p>Address : {address}</p>
                        <Link to='/delivary-location'>
                            <span>Edit Delivery Address</span>
                        </Link>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h5>Review items and </h5>
                        <h5>Delivery </h5>
                    </div>
                    <div className='payment__items'>

                    <FlipMove >
                        {cart.map(item => (
                            <CartProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </FlipMove>
                    <Link to='/'>Forgot Something to Shop ?</Link>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h5>Payment Method</h5>
                    </div>
                    <div className='payment__address'>
                        

                        <form onSubmit={handleSubmit}>
                        
                            <div className="card__element">
                            <CardElement className="card__details" onChange={handleChange} />
                            </div>
                            <div className='payment__priceContainer'>
                            <center>
                                <CurrencyFormat
                                renderText={(value) => (
                                
                                    <p>
                                    Subtotal  {cart?.length} item<small>(s)</small> : <strong>{value}</strong>
                                    </p>
                                    
                                
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)} 
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹ "}
                                />    
                            <Button className="pay__button" variant="warning" type="submit" disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </Button>   
                        </center> 
                            
                        </div>

                        {/* Card Errors */}
                        {error && <div>{error}</div>}
                        
                        </form>



                    </div>
                </div>

               <div className="space">
               
               </div>

            </div>
        </div>
    )
})

export default Payment
