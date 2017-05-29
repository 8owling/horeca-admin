import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
    reduxThunk,
)(createStore);

export const store = createStoreWithMiddleware(reducers);
