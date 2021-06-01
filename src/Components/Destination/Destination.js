import React from 'react';
import './Destination.css';

const Destination = () => {

    return (
        <div className="container destination">
            <div className="row">
                <div className="col-md-4">
                    <form className="my-5">
                        <div class="form-group">
                            <label for="pickFrom">Pick From</label>
                            <input type="text" class="form-control" id="pickForm" placeholder="Dhaka" />
                        </div>
                        <div class="form-group">
                            <label for="pickTo">Pick To</label>
                            <input type="text" class="form-control" id="pickTo" placeholder="Mymensingh" />
                        </div>
                        <button type="submit" class="btn btn-info form-control">Search</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <iframe
                        className="my-5 w-100"
                        title="Google Map"
                        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyDMdlO3qKX7wG6u0KUkTJuVH9IUA57oAm4&origin=Bangladesh+&destination=Bangladesh+ Dhaka &avoid=tolls|highways"
                        width="800"
                        height="650"
                        style={{ border: 0, borderRadius: "5px" }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;