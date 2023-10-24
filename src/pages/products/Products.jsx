import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  const product = useLoaderData();
  console.log(product);
  
  return (
    <div>
      <h1>Products: {product.length}</h1>
     
     {
     product.map((products) => 
         <div key={products._id}>
          <h1>{products.brandName}</h1>
         </div>

      )
     }
    </div>
  );
};

export default Products;