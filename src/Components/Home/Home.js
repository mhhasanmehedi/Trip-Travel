import React, { useEffect, useState } from 'react';
import vehicleData from '../../fakeData/data.json';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() =>{
        setVehicles(vehicleData);
    },[])
    return (
        <div className="vehicle-container">
            <div className="container">
                <div className="row">
                    {
                        vehicleData.map(vehicle => <Vehicle vehicle={vehicle} key={vehicle.id}></Vehicle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;