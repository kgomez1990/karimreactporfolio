

import React from "react";

export default function Navbar( { currentPage, handlePageChange} ) {
    return (
        <div>
            <nav className='navbar'>
                <a className="nav-link" href='#home' onClick={() => handlePageChange('Home')}>Home</a>

                <a className="nav-link" href='#about' onClick={() => handlePageChange('About')}>about</a>

                <a className="nav-link" href='#Portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</a>

                <a className="nav-link" href='#Resume' onClick={() => handlePageChange('Resume')}>Resume</a>

                <a className="nav-link" href='#Resume' onClick={() => handlePageChange('Contact')}>Contact</a>
            </nav>
        </div>
    )
}