import React,{ useEffect,useState } from 'react'
import "./Orders.css"
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import Order from '../Order/Order'


function Orders() {

    const [{user}] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    
      }, [user])

    return (
        <div className='orders'>

            <div className="orders__header">
                <center>
                    {orders.length?<h3>Your Orders</h3>:<h3>You have not bought anything yet</h3>}
                </center>
            </div>
            
            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
