import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import authReducer from './Auth';

const rootReducer = combineReducers({
    form: formReducer,     // <---- Mounted at 'form'
    auth: authReducer
});

export default rootReducer;
