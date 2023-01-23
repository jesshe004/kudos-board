import React from 'react'; 

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "navbar"> 
        <div className = "links"> 
            <Link to = "/Board"> visit board </Link>
        </div>
        </nav>
    );
}

export default Navbar; 