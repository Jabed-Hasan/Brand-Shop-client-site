import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Details from "../Details/Details";


const UpdateProduct = () => {
    const UpdatedProduct = useLoaderData();
    console.log(UpdatedProduct)
    const {_id,name,price,brandName,details,rating,image} = UpdatedProduct;

    const handleUpdateproducts = event => {
        event.preventDefault();
        const form = event.target;
        const name  = form.name.value;
        const price  = form.price.value;
        const brandName  = form.brandName.value;
        const details  = form.details.value;
        const rating  = form.rating.value;
        const image  = form.image.value;
        const type = form.type.value
        const UpdatedProduct = {name,price,brandName,details,rating,image,type}
        console.log(UpdatedProduct)


        fetch(`http://localhost:4000/products/update/${_id}`, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }


    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className='text-xl font-bold text-center'>Update a Product: {name}</h1>

        <form onSubmit={handleUpdateproducts}>
            {/* form name and quantity Control */}
        <div className="md:flex mb-8">
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
            </label>
        </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">price</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
            </label>
        </div>
    </div>
            {/* form  Supplier and taste Control */}
        <div className="md:flex mb-8">
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Brand</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="brandName" defaultValue={brandName}  placeholder="Brand Name" className="input input-bordered w-full" />
            </label>
        </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
                <input type="text" name="details" defaultValue={details}  placeholder="Product Description" className="input input-bordered w-full" />
            </label>
        </div>
    </div>
            {/* form category ad Details Control */}
        <div className="md:flex mb-8">
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Photo URL </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="image" defaultValue={image}  placeholder="category " className="input input-bordered w-full" />
            </label>
        </div>
        <div className="form-control w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="rating" defaultValue={rating}   placeholder="Product Rating" className="input input-bordered w-full" />
            </label>
        </div>
    </div>
    {/* form category ad Details Control */}
    <div>
            <label className ="label">
            <input type="text" name="type" placeholder="Product category type " className="input input-bordered w-full" />
            </label>
            </div>
   
       
        <input type="submit" value="Update Product" className="btn btn-block bg-slate-600 text-white" />
    </form>
    </div>
    );
};

export default UpdateProduct;