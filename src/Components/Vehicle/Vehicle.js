import React from 'react';
import { Link } from 'react-router-dom';
import './Vehicle.css';

const Vehicle = (props) => {
    const { vehicle_name, image, id } = props.vehicle;
    return (
        <div className="col-md-3">
            <Link to={`/destination/${vehicle_name}`} style={{textDecoration:'none',color:'black'}}>
                <div className="single-vehicle-box">
                    <img src={image} alt={vehicle_name} />
                    <h3 className="text-uppercase">{vehicle_name}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Vehicle;