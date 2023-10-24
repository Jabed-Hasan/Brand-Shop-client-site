import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({ data }) => {
    const {brandName,title, description, image, organizer,rating,id,img,products} = data;
    console.log(data)

    
    return (

        <div className=''>
            <Link to={`/products/${brandName}`}>
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img className=
                    'w-[380px] h-[210px]'
                        src={image}
                        alt="ui/ux review check"
                    />
                </div>
            </Link>
           
        </div>

    );
};

export default Brands;