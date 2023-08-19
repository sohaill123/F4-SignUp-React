import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
const Navbar = () => {
    return (
        <nav className='navbar'>
            <p>Dummy Authentication</p>
            <div className='links'>
                <p className="p1">
                    <Link to="/" className="link">Signup</Link>
                </p>
                <p>
                    <Link to="/profile" className="link">Profile</Link>
                </p>
            </div>
        </nav>
    );
};

export default Navbar;
