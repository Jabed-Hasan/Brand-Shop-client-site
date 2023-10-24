import Swal from 'sweetalert2'
const AddProduct = () => {
    const handleAddcoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name  = form.name.value;
        const price  = form.price.value;
        const brandName  = form.brandName.value;
        const description  = form.description.value;
        const rating  = form.rating.value;
        const photo_url  = form.photo_url.value;

        const newProduct = {name,price,brandName,description,rating,photo_url}
        console.log(newProduct)


        fetch('http://localhost:4000/products', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfuly',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className='text-xl font-bold text-center'>Add a Product</h1>

            <form onSubmit={handleAddcoffee}>
                {/* form name and quantity Control */}
            <div className="md:flex mb-8">
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                    
                    <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="description" placeholder="Product Description" className="input input-bordered w-full" />
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
                    
                    <input type="text" name="photo_url" placeholder="category " className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="rating" placeholder="Product Rating" className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        {/* form category ad Details Control */}
       
           
            <input type="submit" value="Add Product" className="btn btn-block bg-slate-600 text-white" />
        </form>
        </div>
    );
};

export default AddProduct;