import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


 
const storeFactory = createStore(reducer, applyMiddleware(thunk));

export default storeFactory