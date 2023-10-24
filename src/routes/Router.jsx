
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BrandsProducts from "../pages/Cards/BrandsProducts";
import PrivateRoute from "./PrivateRoute";
import Contac from "../pages/About/Contac"
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Products from "../pages/products/Products";
import Details from "../pages/Details/Details";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>fetch('/Data.json')
            },
            {
                path: '/products/:brandName',
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: () => fetch(`http://localhost:4000/products`)
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
                loader: () => fetch('http://localhost:4000/myCart')
            },
            {
                path: '/Products',
                element: <PrivateRoute>
                    <Products></Products>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:4000/products')
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
            




        ]
    }
]);

export default routes;