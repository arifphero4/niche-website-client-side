import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [order, setOrder] = useState([]);
    console.log(order)
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))

    },[])
    return (
        <div>
            <h2>Manage All Orders</h2>
        </div>
    );
};

export default ManageOrders;