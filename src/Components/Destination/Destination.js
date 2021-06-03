import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Map from '../Map/Map';
import './Destination.css';

const Destination = () => {
    const { id } = useParams();
    const history = useHistory();
    const [place, setPlace] = useContext(UserContext);


    const handelBook = () => {
        history.push(`/book/${id}`)
    }

    const selectedPlace = {
        pickForm: '',
        pickTo: ''
    }

    const handlePlaceInput = event => {
        selectedPlace[event.target.name] = event.target.value;
    }
    console.log(selectedPlace);
    
    const handlePlace = (event) => {
        setPlace(selectedPlace);
        event.preventDefault();

    }

    return (
        <div className="destination">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-5">
                        <form onSubmit={handlePlace}>
                            <div class="form-group">
                                <label for="pickFrom">Pick From__</label>
                                <input type="text" name="pickFrom" onBlur={handlePlaceInput} class="form-control" id="pickForm" placeholder="From" required />
                            </div>
                            <div class="form-group">
                                <label for="pickTo">Pick To__</label>
                                <input type="text" name="pickTo" onBlur={handlePlaceInput} class="form-control" id="pickTo" placeholder="To" required />
                            </div>
                            <div class="form-group">
                                <label for="date">Date__</label>
                                <input type="date" class="form-control" id="date" required />
                            </div>
                            <input type="submit" class="btn btn-info form-control" value="Search" onClick={() => handelBook()} />
                        </form>
                    </div>
                    <div className="col-md-8">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;