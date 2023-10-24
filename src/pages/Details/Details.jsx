
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import Footer from '../footer/Footer';
import CardDetail from '../Cards/CardDetail';

const Details = () => {
    const [detail, setDetail] = useState({});
    const { name } = useParams();
    const details = useLoaderData();
    console.log(details)
    
    useEffect(() => {
        if (Array.isArray(details)) {
            const foundDetail = details.find((item) => item.name === name);
            setDetail(foundDetail || {});
        }
    }, [name, details]);

    return (
        <div>
            <CardDetail detail={detail} />
            <Footer />
        </div>
    );
};



export default Details;
