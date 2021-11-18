import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import swal from 'sweetalert';


const ManageProduct = () => {
    
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addToProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])

    const handleDeleteOrder = (id) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this deleted product",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            const url = `http://localhost:5000/addToProducts/${id}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                const remainingOrders = products.filter((product) => product._id !== id);
                setProducts(remainingOrders);
                if (data.deletedCount === 1) {
                  swal("", "Order deleted successfully!", "success");
                }
              });
          } else {
            swal("Your Ordered product is safe!");
          }
        });
      };
    return (
        <Container>
            <Grid container spacing={2}>
               {
                   products.map(product => <ManageAllProduct
                        key={product.id}
                        product={product}
                        handleDeleteOrder={handleDeleteOrder}
                   >      
                   </ManageAllProduct>)
               }

            </Grid>
        </Container>
    );
};

export default ManageProduct;
