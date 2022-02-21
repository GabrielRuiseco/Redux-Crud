import { combineReducers } from 'redux';
import productRerucers from './productRerucers';

export default combineReducers({
  products: productRerucers,
});
