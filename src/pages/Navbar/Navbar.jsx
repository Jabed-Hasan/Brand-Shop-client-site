import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Register/providers/AuthProvider';


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const Navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/AddProduct'>Add Product</NavLink></li>
        <li><NavLink to='/Carts'>MyCart</NavLink></li>

     
    </>
    return (
        <div className='px-10'>
            <div className="navbar bg-base-100 items-center flex flex-col md:flex-row lg:flex-row">
                <div className="navbar-start ">
                    {/* <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlinks}
                        </ul>
                    </div> */}
                    <img className='h-[100px] w-[280px]' src="https://i.ibb.co/j4Fs0LZ/Screenshot-106.png" alt="" />
                </div>
                <div className="navbar-center">
                    <ul className="menu md:menu-horizontal lg:menu-horizontal ">
                        {Navlinks}
                    </ul> 
                </div>
                <div className="navbar-end gap-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;