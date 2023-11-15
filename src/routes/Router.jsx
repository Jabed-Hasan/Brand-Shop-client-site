
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import PrivateRoute from "./PrivateRoute";
import Contac from "../pages/About/Contac"
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";

import Details from "../pages/Details/Details";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Carts from "../pages/MyCart/Carts";
import FoodDetails from "../pages/FoodDetails/FoodDetails";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Data.json')
            },
            {
                path: '/products/:brandName',
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: () => fetch(`https://b8a10-brandshop-server-side-jabed-hasan-eal7884yj.vercel.app/products`)
            },

            {
                path: '/AddProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>,
                loader: () => fetch('/Data.json')
            }, 
            {
                path: '/MyCart',
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>,
                //loader: () => fetch('https://b8a10-brandshop-server-side-jabed-hasan-eal7884yj.vercel.app/myCart')

            },
            {
                path: '/Carts',
                element:
                    <PrivateRoute>
                        <Carts></Carts>
                    </PrivateRoute>,
                loader: () => fetch('https://b8a10-brandshop-server-side-jabed-hasan-eal7884yj.vercel.app/myCart')

            },
            {
                path: '/Products/:brandName/update/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-jabed-hasan-eal7884yj.vercel.app/products/update/${params.id}`)
            },
            {
                path: '/Products/:brandName/productDetails/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-jabed-hasan-eal7884yj.vercel.app/products/productDetails/single/${params.id}`)
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/About',
                element: <Contac></Contac>
            },
            
            {
                path: '/Details/:id',
                element: <FoodDetails></FoodDetails>
            },





        ]
    }
]);

export default routes;