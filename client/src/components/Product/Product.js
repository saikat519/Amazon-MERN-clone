import React from 'react';
import './Product.css';
import Button from '@material-ui/core/Button';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating }) {

  //const[{cart},dispatch] =  useStateValue(); --->this is showing warning bcz we aren't using cart value
  const [{ user },dispatch] =  useStateValue();

  const addToCart = ()=>{
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    });
  }
 
  const signinToPurchase = () =>{
      window.location.href = "/login"
  }

    return (
      
      <div className="product">
      
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong> {price}</strong>
        </p>
        <p>Rating</p>
        <div className="product__rating">
               
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        
        </div>
      </div>

      <img src={image} alt="" />
        
      {user && <Button
        variant="contained"
        style={{backgroundColor:"#fbcc57"}}
        startIcon={<AddShoppingCartSharpIcon />}
        onClick={addToCart}
      >
       Add to Cart
      </Button>}
      {!user && <Button
        variant="contained"
        style={{backgroundColor:"#fbcc57"}}
        onClick={signinToPurchase}
      >
       Sign-in To Purchase 
      </Button>}
      
    </div>
   
    )
}

export default Product
