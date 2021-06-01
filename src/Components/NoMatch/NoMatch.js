import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';
import background from '../../images/Bg.png';

const NoMatch = () => {
    return (
        <div className="noMatch-wrapper">
            <div className="noMatch-inner">
                <h1>Oops!</h1>
                <h2>404 - PAGE NOT FOUND</h2>
                <p>The page you are looking for might have been removed <br />
                had its name changed of is temporary unavailable</p>
                <Link to="/home">
                    <button className="btn btn-info rounded-pill pt-2 pb-2 pl-5 pr-5">GO TO HOMEPAGE</button>
                </Link>
            </div>
        </div>
    );
};

export default NoMatch;