import React from 'react';
import './Header.css'
import user from '../../images/user-1.png'

const Header = () => {
    return (
        <div>
            <nav className='mt-5'>
                <div className='container flex justify-around items-center'>
                    <div>
                        <h2 className='text-2xl font-bold'>Knowledge Cafe</h2>
                    </div>
                    <img className='w-12' src={user} alt="" />

                </div>



            </nav>
        </div>
    );
};

export default Header;