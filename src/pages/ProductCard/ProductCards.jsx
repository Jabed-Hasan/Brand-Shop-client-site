import Swal from "sweetalert2";


const ProductCards = (cart, carts, setCarts) => {

    const { _id, name, price, brand, details, image } = cart
    const handleDelete = _id=>  {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/myCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cof => cof._id !== _id)
                            setCarts(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 ">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{price}</p>
                    <p>{brand}</p>
                    <p>{details}</p>
                </div>

                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn ">View</button>

                    <button className="btn bg-slate-500">Edit</button>

                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-orange-500">X</button>
                </div>


            </div>
        </div>
    );
};

export default ProductCards;