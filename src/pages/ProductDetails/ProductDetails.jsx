import swal from "sweetalert";

// const ProductDetails = ({ Detail }) => {
//   const { _id, name, brandName, image, rating, price, category, details } = Detail || {};

//   const handleAddToCart = () => {
//     const AddCartItemsArray = [];
//     const CartItems = JSON.parse(localStorage.getItem("MyCart"));

//     if (!CartItems) {
//       AddCartItemsArray.push(Detail);
//       localStorage.setItem("MyCart", JSON.stringify(AddCartItemsArray)); // Use "MyCart" as the key
//       swal("Good job!", "Product Added Successfully", "success");
//     } else {
//       const isExist = CartItems.find((item) => item._id === _id);

//       if (!isExist) {
//         AddCartItemsArray.push(...CartItems, Detail);
//         localStorage.setItem("MyCart", JSON.stringify(AddCartItemsArray)); // Use "MyCart" as the key
//         swal("Good job!", "Product Added Successfully", "success");
//       } else {
//         swal("Error!", "Already Added", "error");
//       }
//     }
//   };

import React from 'react';
import { useLoaderData } from "react-router-dom";
const ProductDetails = () => {
  const Product = useLoaderData();
  console.log(Product)
  const {_id,name,price,brandName,details,rating,image} = Product;

  return (
    <div>
      <div className="relative flex flex-col rounded-xl bg-clip-border text-gray-700">
        <img className="w-full h-[550px]" src={image} alt={name} />
        <div className="backdrop-brightness-50 rounded-lg absolute w-full my-[461px]">
          <button
            className="btn bg-red-500 hover-bg-violet-600 border-none text-white my-5 ml-10"
          >
            Add to Cart {price}
          </button>
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {details}
          </p>
        </div>
        <div className="flex items-center justify-between p-6"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
