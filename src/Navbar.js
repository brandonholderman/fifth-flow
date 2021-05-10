import { Link } from 'react-router-dom';
import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Fifth Flow TV</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;