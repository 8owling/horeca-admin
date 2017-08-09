import axios from 'axios';
//import { browserHistory } from 'react-router';
import { SHOP_SHOW_ALL, LOAD_SHOP_ERROR } from './types';

const API_URL = 'http://192.168.4.161/laravel_study/public/';


export function shopShowAll(condition, sort, page, pageSize) {

  return (dispatch) => {

    axios.get('http://192.168.4.161/laravel_study/public/shop/show', {
      params: {
        filtered: condition,
        sorted: sort,
        page: page,
        pageSize: pageSize,
      }
    })
      .then((res) => {

        dispatch({
          type: SHOP_SHOW_ALL,
          payload: res.data
        });

      }).catch((e) => {
        console.log("filterShopErr :" + e);
      });

  }

};




export function shopShowAll_Old() {


  //console.log(shop_name);
  return (dispatch) => {
    // Submit username and password to server
    axios.get(`${API_URL}shop/show`)
      .then(res => {
        // If request is good
        // - Update state to indicate user in authenticated

        dispatch({
          type: SHOP_SHOW_ALL,
          payload: res.data
        });
        // - Save the JWT token
        //localStorage.setItem('token', res.data.token);
        // - Redirect to the route '/feature'
        // browserHistory.push('/');


      }).catch(function (error) {
        // If request is bad
        // - Show an error to the user
        console.log('loadShopError : ' + error);
        dispatch(loadShopError(error));
        //console.log("error O.O: " + error);
      });
  }
};


export function loadShopError(error) {
  // console.log('loadShopError :' + error);
  return {
    type: LOAD_SHOP_ERROR,
    payload: error
  };
};
