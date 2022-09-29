import React from 'react';
import Logo from '../../images/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header class="container">

                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <h1 class="fs-3 text-secondary">Fit <span
                                class="fs-3 text-light bg-primary rounded px-3 py-1">Shred</span>
                            </h1>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav justify-content-center">

                                <li class="nav-item">
                                    <a class="nav-link pe-3">Trainers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">FAQs</a>
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