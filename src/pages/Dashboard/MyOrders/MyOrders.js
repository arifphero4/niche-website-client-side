
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MuiButton from '../../../styleComponent/ButtonStyle';

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
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">City</TableCell>
                    <TableCell align="right">Country</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Cancel Order</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {order.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right">{row.country}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                    <MuiButton variant="contained"> Delete </MuiButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;