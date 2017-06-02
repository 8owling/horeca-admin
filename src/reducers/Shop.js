
import { SHOP_SHOW_ALL, LOAD_SHOP_ERROR } from '../actions/types';

const INITIAL = { all: [] };

export default (state = INITIAL, action) => {
    switch (action.type) {
        case SHOP_SHOW_ALL:
            //console.log(action.payload)
            return { ...state, all: action.payload };
        //all คือ การ Map state to props 
        case LOAD_SHOP_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

