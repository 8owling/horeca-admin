import axios from 'axios';
//import { browserHistory } from 'react-router';
import { SHOP_SHOW_ALL, LOAD_SHOP_ERROR } from './types';

const API_URL = 'http://192.168.4.161/laravel_study/public/';




export function shopShowAll() {


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

// Now let's mock the server.  It's job is simple: use the table model to sort and return the page data
export function requestData(pageSize, page, sorted, filtered) {
  return new Promise((resolve, reject) => {
    // On the server, you'll likely use SQL or noSQL or some other query language to do this.
    // For this mock, we'll just use lodash
    let filteredData = shopShowAll()
    if (filtered.length) {
      filteredData = filtered.reduce(
        (filteredSoFar, nextFilter) => {
          return filteredSoFar.filter(
            (row) => {
              return (row[nextFilter.id] + '').includes(nextFilter.value)
            })
        }
        , filteredData)
    }
    const sortedData = filteredData.orderBy(filteredData, sorted.map(sort => {
      return row => {
        if (row[sort.id] === null || row[sort.id] === undefined) {
          return -Infinity
        }
        return typeof row[sort.id] === 'string' ? row[sort.id].toLowerCase() : row[sort.id]
      }
    }), sorted.map(d => d.desc ? 'desc' : 'asc'))

    // Be sure to send back the rows to be displayed and any other pertinent information, like how many pages there are total.
    const res = {
      rows: sortedData.slice(pageSize * page, (pageSize * page) + pageSize),
      pages: Math.ceil(filteredData.length / pageSize)
    }

    // Here we'll simulate a server response with 500ms of delay.
    setTimeout(() => resolve(res), 500)
  })
}
