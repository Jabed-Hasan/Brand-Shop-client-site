import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../footer/Footer';

import BrandsProducts from '../Cards/BrandsProducts';

const Details = () => {
    const { brandName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    const fetchData = async () => {
        // Fetch product data for the given brandName
        try {
            const response = await fetch(`http://localhost:4000/products/${brandName}`);
            if (response.ok) {
                const data = await response.json();
                setFilteredProducts(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // Fetch data initially
        fetchData();

        // Set up an interval to periodically fetch updates (e.g., every 5 seconds)
        const interval = setInterval(fetchData, 5000);

        return () => {
            // Clear the interval on unmount
            clearInterval(interval);
        };
    }, [brandName]);

    return (
        <div>
            <div className='grid grid-cols-2 gap-8 ml-20 mr-20'>
                {filteredProducts.map((detail) => (
                    <BrandsProducts key={detail.brandName} detail={detail} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Details;