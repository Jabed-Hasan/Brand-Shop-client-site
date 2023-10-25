import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const BrandProducts = ({detail,details,setdetails}) => {
    const { _id,name,brandName,image,rating,price,category,description} = detail;
    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
            
    //         fetch(`http://localhost:4000/products/${_id}`,{
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if(data.deletedCount > 0){
    //                 Swal.fire(
    //                     'Deleted!',
    //                     'Your product has been deleted.',
    //                     'success'
    //                   )
    //                   const remaining = details.filter(pro => pro._id!==_id)
    //                   setdetails(remaining);
    //             }
    //         })
    //         }
    //       })
    // }
    return (
        
    <div>
          
            <div className="card card-side bg-base-100 shadow-xl p-5">
            <figure><img className="w-[200px] h-[200px]" src={image} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 ">
                <div className="pl-20">
                <h2 className="card-title">Brand Name: {brandName}</h2>
                <p> Name: {name}</p>
                <p>Price:{price}</p>
                <p>Raiting:{rating}</p>
               
                </div>

                <div className="btn-group btn-group-vertical space-y-4">
                    <Link to={`productDetails/${_id}`}>
                    <button className="btn bg-slate-500">Details</button>
                    </Link>
                    <Link to={`update/${_id}`}>
                    <button className="btn bg-slate-500">Update</button>
                    </Link>
                    {/* <button
                    onClick={()=>{handleDelete(_id)}}
                    className="btn  bg-red-500">X</button> */}
                </div>

                
            </div>
        </div>



    </div>
    );
};


export default BrandProducts;