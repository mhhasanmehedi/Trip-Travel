import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="container header">
            <div className="logo">
                <Link style={{textDecoration:'none'}} className="logo-style" to="/home">Quick Ride</Link>
            </div>
            <div className="mainmenu">
                <ul>
                    <li>
                        <Link className="link-style" to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="link-style" to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link className="link-style" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="link-style" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;