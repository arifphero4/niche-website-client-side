
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [order, setOrder] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))

    },[])
    const {user} = useAuth();
        const myOrder = order.filter(orders => orders.email === user.email);
        console.log(myOrder);
    return (
        <div>
            <h2>My Orders</h2>
        </div>
    );
};

export default MyOrders;