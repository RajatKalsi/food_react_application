import {createStore} from 'redux';
import mainReducer from './reducers/indexreducer';

let store=createStore(mainReducer);

export default store;