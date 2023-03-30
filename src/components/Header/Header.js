import React from 'react';
import './Header.css'
import user from '../../images/user-1.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                   <h1>Knowledge Cafe</h1>
                    <img src={user} alt="" />
                </div>
            </nav>
        </div>
    );
};

export default Header;