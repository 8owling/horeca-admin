import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

//const API_URL = 'http://192.168.4.161/laravel_study/public';
const API_URL = 'http://localhost:90/testJWT/public/api/auth';

export function signinUser({ username, password }) {
    return (dispatch) => {
        // Submit username and password to server
        axios.post(`${API_URL}/signin`, { "email": username, "password": password })
            .then(res => {
                // If request is good
                // - Update state to indicate user in authenticated
                dispatch({ type: AUTH_USER });
                // - Save the JWT token
                localStorage.setItem('token', res.data.token);
                // - Redirect to the route '/feature'
                browserHistory.push('/');
            }).catch(function (err) {
                // If request is bad
                // - Show an error to the user
                //console.log(err.response.data);
                dispatch(authError(err.response.data));
            });
    }
};

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};