import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName,email} = result.user;
                const signInUser = {name: displayName,email};
                setLoggedInUser(signInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div className="login-area">
            <div>
                <form action="">
                    <h2>Login</h2>
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                    <button type="submit">Login</button>
                </form>
                <h2 className="text-center m-2">Or</h2>
                <button className="login-button"><i><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></i> <span>Continue With Facebook</span></button>
                <br />
                <button onClick={handleGoogleSignIn} className="login-button"><i><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></i> <span>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default Login;