import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">YusufBlog</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/write">Write</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;



// import { Link } from 'react-router-dom';

// export default function Navbar() {
//     return (
//         <nav>
//             <Link to="/">Posts</Link> | <Link to="/new">Create Post</Link>
//         </nav>
//     );
// }