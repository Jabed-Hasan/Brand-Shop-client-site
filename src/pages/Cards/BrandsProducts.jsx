import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const BrandProducts = ({detail}) => {
    const { name,brandName,image,rating,price,category,description} = detail;
    
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 ">
                <div>
                <h2 className="card-title">Brand Name: {brandName}</h2>
                <p> Name: {name}</p>
                <p>Price:{price}</p>
                <p>Raiting:{rating}</p>
               
                </div>

                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn ">View</button>
                    <Link to={`updateCoffee/${brandName}`}>
                    <button className="btn bg-slate-500">Edit</button>
                    </Link>
                    <button
                    
                    className="btn  bg-red-500">X</button>
                </div>

                
            </div>
        </div>
    );
};

export default BrandProducts;