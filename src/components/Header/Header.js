import React from 'react';
import Logo from '../../images/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="container mt-3">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <h1 className="fs-3 text-secondary">Fit <span
                                className="fs-3 text-light bg-primary rounded px-3 py-1">Shred</span>
                            </h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link pe-3">Trainers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">FAQs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;