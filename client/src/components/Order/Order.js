import React from 'react'
import './Order.css'
import moment from "moment"
import CurrencyFormat from "react-currency-format"
import CartProduct from '../CartProduct/CartProduct'

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            
                {order.data.cart?.map(item => (
                    <CartProduct
                        className="cart__product"
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))}
            
            <CurrencyFormat
            renderText={(value) => (
                <h3 className="order__total">Order Total: {value}</h3>
               
            
            )}
            decimalScale={2}
            value={order.data.amount / 100}         
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹ "}
            />   

            <p >
            <small>Order id : {order.id}</small>
            </p>
        </div>
    )
}

export default Order
