import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {reducers} from './reducers'

// remove this line on production
import {logger} from 'redux-logger';



export default configureStore = () => {
    return createStore(
        reducers, 
        {},
        applyMiddleware(
        thunk,
        promise,
        logger
        ));
     
}