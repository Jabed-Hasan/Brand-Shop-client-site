import { useLoaderData } from 'react-router-dom';


import { useState } from 'react';
import MyCart from './MyCart';


function Carts() {
  const loadedcarts = useLoaderData(); // Corrected variable name
  console.log(loadedcarts)
  const [carts, setcarts] = useState(loadedcarts);

  return (
    <>
      <div className='m-20'>
        <h1 className='text-6xl text-purple-600 text-center my-20'>
          Total carts: {carts.length}
        </h1>

        <div className='grid md:grid-cols-2 gap-4'>
          {carts.map((cart) => (
            <MyCart
              key={cart._id}
              cart={cart}
              carts={carts} 
              setcarts={setcarts}
            ></MyCart>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carts;
