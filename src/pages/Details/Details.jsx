import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import Footer from '../footer/Footer';

import BrandsProducts from '../Cards/BrandsProducts';

const Details = () => {
    const { brandName } = useParams();
    const details = useLoaderData();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filter the products based on the brandName
        const filteredProducts = details.filter((item) => item.brandName === brandName);
        setFilteredProducts(filteredProducts);
    }, [brandName, details]);

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
