import React from 'react';
import { Link } from 'react-router-dom';
import './Vehicle.css';

const Vehicle = (props) => {
    const { vehicle_name, image, id } = props.vehicle;
    return (
        <div className="col-6 col-md-4 col-lg-3">
            <Link to={`/destination/${id}`} style={{textDecoration:'none',color:'black'}}>
                <div className="single-vehicle-box">
                    <div>
                    <img src={image} alt={vehicle_name} />
                    <h3 className="text-uppercase">{vehicle_name}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Vehicle;