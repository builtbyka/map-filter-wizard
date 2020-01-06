import { combineReducers } from 'redux';
import { locationFlow } from '../../filters/location/_state/LocationReducer';

export default combineReducers({
  location: locationFlow,
});
