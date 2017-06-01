import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const API_URL = 'http://192.168.4.161/laravel_example/public';

export function signinUser({ username, password }) {
    return (dispatch) => {
        // Submit username and password to server
        axios.post(`${API_URL}/signin`, { username, password })
            .then(res => {
                // If request is good
                // - Update state to indicate user in authenticated
                dispatch({ type: AUTH_USER });
                // - Save the JWT token
                localStorage.setItem('token', res.data.token);
                // - Redirect to the route '/feature'
                browserHistory.push('/');
            }).catch(function (error) {
                // If request is bad
                // - Show an error to the user
                //console.log(error);
                dispatch(authError('Bad Login Info'));
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