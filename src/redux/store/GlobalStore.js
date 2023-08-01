import {legacy_createStore as createStore} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension'
import CombineReducer from '../reducers/CombineReducer';

export default  createStore(CombineReducer,composeWithDevTools())