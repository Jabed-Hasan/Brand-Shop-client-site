import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const CardDetails = () => {
    
    const [Detail, setDetail] = useState({});

    const { id } = useParams()
   // console.log(id)

    const CardDetails = useLoaderData();
  //  console.log(CardDetails);


    useEffect(() => {
        const findDetail = CardDetails?.find((Detail) => Detail.id == id)
        setDetail(findDetail);

    }, [id, CardDetails]);

    
    return (

        <div>
             
        <ProductDetails Detail={Detail}></ProductDetails>
        </div>
    );
};

export default CardDetails;


