import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import authReducer from './Auth';
import shopReducer from './Shop';

const rootReducer = combineReducers({
    form: formReducer,     // <---- Mounted at 'form'
    auth: authReducer,
    shop: shopReducer,
});

export default rootReducer;
