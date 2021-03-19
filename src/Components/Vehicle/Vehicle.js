import React from 'react';
import './Vehicle.css';

const Vehicle = (props) => {
    const {vehicle_name,image} = props.vehicle;
    return (
        <div className="col-md-3">
            <div className="single-vehicle-box">
                <img src={image} alt={vehicle_name}/>
                <h3>{vehicle_name}</h3>
            </div>
        </div>
    );
};

export default Vehicle;