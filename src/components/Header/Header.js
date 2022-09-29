import React from 'react';
import Logo from '../../images/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <nav className='header'>
                    <div className='header-title'>
                        <img src={Logo} alt="" />
                        <h2>Shred</h2>
                    </div>
                    <div>
                        <a href="/shop">Excercises</a>
                        <a href="/orders">Trainers</a>
                        <a href="/inventory">FAQS</a>
                        <a href="/about">About</a>
                    </div>
                </nav>
            </nav>
        </div>
    );
};

export default Header;