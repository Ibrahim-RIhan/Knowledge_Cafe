import React from 'react';
import './Header.css'
import user from '../../images/user-1.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-white">
                <div className="container-fluid">
                   <h1 className='fs-1 fw-bold'>Knowledge Cafe</h1>
                    <img src={user} alt="userImage" />
                </div>
            </nav>
        </div>
    );
};

export default Header;