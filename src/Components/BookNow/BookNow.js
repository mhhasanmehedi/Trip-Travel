import { faMapMarker, faMapMarkerAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router';
import Map from '../Map/Map';
import fakeData from '../../fakeData/data.json';
import './BookNow.css';
  


const BookNow = () => {
    const {id} = useParams();

    const transport=  fakeData.find(transport => transport.id == id);
    const {location1, location2, image, vehicle_name, capacity, cost1, cost2, cost3} =transport;

    
    return (
        <section className="container">
        <div className="row">
            <div className="col-md-4 book-details mt-5">
                <div className="location p-3">
                    <h5> <span><FontAwesomeIcon icon={faMapMarker} /></span> {location1}</h5>
                    <h5 className="mt-4"> <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span> {location2}</h5>
                </div>

                <div className="transport-quality p-2">
                    <span className="transport-image"><img src={image} alt=".."/></span>
                    <span className="transport-name">{vehicle_name}</span>
                    <span className="transport-capacity">
                            <span ><FontAwesomeIcon icon={faUserFriends} /> </span>
                            {capacity}
                    </span>
                    <span className="transport-cost">{cost1}</span>
                </div>

                <div className="transport-quality p-2">
                    <span className="transport-image"><img src={image} alt=".."/></span>
                    <span className="transport-name">{vehicle_name}</span>
                    <span className="transport-capacity">
                        <span ><FontAwesomeIcon icon={faUserFriends} /> </span>
                    {capacity}</span>
                    <span className="transport-cost">{cost2}</span>
                </div>

                <div className="transport-quality p-2">
                    <span className="transport-image"><img src={image} alt=".."/></span>
                    <span className="transport-name">{vehicle_name}</span>
                    <span className="transport-capacity">
                        <span ><FontAwesomeIcon icon={faUserFriends} /> </span>
                    {capacity}</span>
                    <span className="transport-cost">{cost3}</span>
                </div>

            </div>
            
            <div className="col-md-8">
               <Map />
            </div>
        </div>
    </section>
    );
};

export default BookNow;