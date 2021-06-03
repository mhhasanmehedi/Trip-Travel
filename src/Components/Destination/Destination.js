import React from 'react';
import { useHistory, useParams } from 'react-router';
import Map from '../Map/Map';
import './Destination.css';

const Destination = () => {
    const { id } = useParams();
    const history = useHistory();


    const handelBook = () => {
        history.push(`/book/${id}`)
    }

    return (
        <div className="container destination">
            <div className="row">
                <div className="col-md-4">
                    <form className="my-5">
                        <div class="form-group">
                            <label for="pickFrom">Pick From__</label>
                            <input type="text" class="form-control" id="pickForm" placeholder="From" required />
                        </div>
                        <div class="form-group">
                            <label for="pickTo">Pick To__</label>
                            <input type="text" class="form-control" id="pickTo" placeholder="To" required />
                        </div>
                        <div class="form-group">
                            <label for="date">Date__</label>
                            <input type="date" class="form-control" id="date" required />
                        </div>
                        <button type="submit" class="btn btn-info form-control" onClick={() => handelBook()}>Search</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Destination;