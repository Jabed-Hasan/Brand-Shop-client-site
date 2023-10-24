import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Brands from './Cards/Brands';
import Footer from './footer/Footer';

import Banner from './Banner/Banner';


const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <div className='py-10 px-10'>
                <div>
                <hr>
                </hr>
                <h1 className='font-bold text-center text-5xl my-7'> Our Trusted Brands </h1>
                <hr></hr>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {

                    data.brands.map(adata => <Brands key={adata.id} data={adata}></Brands>)
                }
                

            </div>
           
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;