import React from 'react';

const Map = () => {
    return (
        <div className="mapBox">
            <iframe
                className="my-5 w-100"
                title="Google Map"
                src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyDMdlO3qKX7wG6u0KUkTJuVH9IUA57oAm4&origin=Bangladesh+&destination=Bangladesh+ Dhaka &avoid=tolls|highways"
                width="800"
                height="500"
                style={{ border:'none', boxShadow: "-1px 2px 12px 2px rgb(26 160 160)", borderRadius: "5px" }}
                allowFullScreen=""
                loading="lazy">
            </iframe>
        </div>
    );
};

export default Map;