import React,{ useState } from 'react'
import './Delivary.css'
import { Link } from "react-router-dom";
import {Container,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';


function Delivary() {
    const [,dispatch] =  useStateValue();

    const history = useHistory();

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [address, setAddress] = useState('');
    const [landMark, setLandMark] = useState('');
    const [city, setCity] = useState('');


    const saveChanges = () => {
        
        dispatch({
            type:"SET_ADDRESS",
            item:{
                city,
                name,
                mobileNumber,
                pinCode,
                address,
                landMark
            }
        });


        history.push('/payment')
    }

    return (
        <div className='delivary'>
            <Container>
            <center>
                <Link to='/'>
                    <img
                        className="amazon__logo"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                        alt=""
                    />
                </Link>
               
            </center>
            

            <Container>

            <div className="mid">
            
            <div className="left">
            <h2>Enter The Delivary Address</h2>
        <form className="addressForm" onSubmit={saveChanges}>

            <label>Full Name *</label><br />
            <input type='text' value={name} onChange={e => setName(e.target.value)} required />
            <br />

            <label>Mobile Number *</label><br />
            <input type='number' value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} required />
            <br />

            <label>Pin Code *</label><br />
            <input required type='number' value={pinCode} onChange={e => setPinCode(e.target.value)} />
            <br />

            <label>Address *</label><br />
            <textarea required type='text' value={address} onChange={e => setAddress(e.target.value)} />
            <br />

            <label>Land Mark *</label><br />
            <input required type='text' value={landMark} onChange={e => setLandMark(e.target.value)} />
            <br />

            <label>City/District *</label><br />
            <input required type='text' value={city} onChange={e => setCity(e.target.value)} />
            <br />

            <Button type='submit' variant="warning">Save Changes</Button>
        </form>
        </div>
        
        </div>

       


       
            
            </Container> 
            
            </Container>
        </div>
    )
}

export default Delivary
