import React from 'react';
import map from '../../Map.png';
import './Destination.css';

const Destination = () => {
    return (
        <div className="container destination">
            <div className="row">
                <div className="col-md-4">
                    <div className="form">
                        <form action="">
                            <p>Pick From</p>
                            <input type="text" />
                            <p>Pick To</p>
                            <input type="text" />
                            <input className="search-btn" type="button" value="Search" />
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;