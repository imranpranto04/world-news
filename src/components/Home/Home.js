import React from 'react';
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
} from "../../features/userSlice";

import "./Home.css";

const Home = () => {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    return (
        <div className="container home__page" style={{ display: isSignedIn ? "none" : "" }}>
            {!isSignedIn ? (
                <div className="login__message">
                    <h2>📰</h2>
                    <h1>World News</h1>
                    <h2>Let's start...</h2>
                    <p>
                        Read World News Update with us.
                    </p>
                    <GoogleLogin
                        clientId="216669075185-89i6rb5idhg8bee5a9n6qlki839h8cd9.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login__button"
                            >
                                Login with Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />

                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Home;