import React from 'react';
import { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Container, Image, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id, name, email, photo, isSignIn } = loggedInUser;


    const handleSignOut = () => {
        firebase.auth()
            .signOut()
            .then(res => {
                const signInUser = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setLoggedInUser(signInUser)
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} height="60px" alt="" /><span style={{ color: 'black', marginLeft: '10px', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Trip Travel</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home" className="ml-4">Home</Nav.Link>
                        <Nav.Link href={`/destination/${id}`} className="ml-4">Destination</Nav.Link>
                        <Nav.Link href="/blog" className="ml-4">Blog</Nav.Link>
                        <Nav.Link href="/contact" className="ml-4">Contact</Nav.Link>
                        {
                            isSignIn ?
                                <OverlayTrigger
                                    trigger="click"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id="popover-positioned-bottom">
                                            <div className="d-flex justify-content-center mt-1">
                                                <Image style={{ maxWidth: "60px" }} src={photo} roundedCircle />
                                            </div>
                                            <Popover.Content>
                                                <h5 className="text-center m-2 mb-2" style={{ lineHeight: '0px', padding: '7px' }}>{name}</h5>
                                                <strong className="text-center">{email}</strong>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <Link to="/home" style={{ width: '100%' }}>
                                                        <button onClick={handleSignOut} className="btn btn-info w-100 mt-4">Logout</button>
                                                    </Link>
                                                </div>
                                            </Popover.Content>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link style={{ fontWeight: "700", color: "black",border:'1px solid #138496' }} className="ml-4">{name}</Nav.Link>
                                </OverlayTrigger>
                                :
                                <Nav.Link href="/Login" className="btn btn-info ml-4 text-white pl-3 pr-3">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;