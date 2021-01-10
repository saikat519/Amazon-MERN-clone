import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider';
import { Button,Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Subtotal() {

  const [{cart}] = useStateValue();
  const history = useHistory();

  var price = 0;
  cart.forEach((item)=>{
    price += item.price;
  });

    return (
      <Container className="container">
      <div className="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
            Subtotal  {cart?.length} item<small>(s)</small> : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /><p> This order contains a gift</p>
            </small>
          </>
        )}
        decimalScale={2}
        value={price} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹ "}
      />
      <Button variant="warning" size="lg" onClick={e => history.push('/delivary-location')}>Proceed to Pay</Button> 
       
    </div>
    </Container>
    )
}

export default Subtotal
