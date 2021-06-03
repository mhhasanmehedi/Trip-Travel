import { faMapMarker, faMapMarkerAlt, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import Map from '../Map/Map';
import fakeData from '../../fakeData/data.json';
import './BookNow.css';
import bg from '../../images/Bg.png';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import { UserContext } from '../../App';



const BookNow = () => {
    const { id } = useParams();
    const [place,setPlace] = useContext(UserContext);

    const transport = fakeData.find(transport => transport.id == id);
    const { location1, location2, image, vehicle_name, capacity, cost1, cost2, cost3 } = transport;

    return (
        <section style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'bottom center' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="book-details">
                            <div className="location">
                                <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>{location1}</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>{location2}</TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </div>

                            <div className="transport-quality">
                                <img src={image} height='50px' width="50px" alt="" />
                                <h5>{vehicle_name}</h5>
                                <h5><FontAwesomeIcon style={{ color: '#988d8d', marginRight: '3px' }} icon={faUserFriends} />{capacity}</h5>
                                <h5>{cost1}</h5>
                            </div>
                            <div className="transport-quality">
                                <img src={image} height='50px' width="50px" alt="" />
                                <h5>{vehicle_name}</h5>
                                <h5><FontAwesomeIcon style={{ color: '#988d8d', marginRight: '3px' }} icon={faUserFriends} />{capacity}</h5>
                                <h5>{cost2}</h5>
                            </div>
                            <div className="transport-quality">
                                <img src={image} height='50px' width="50px" alt="" />
                                <h5>{vehicle_name}</h5>
                                <h5><FontAwesomeIcon style={{ color: '#988d8d', marginRight: '3px' }} icon={faUserFriends} />{capacity}</h5>
                                <h5>{cost3}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookNow;