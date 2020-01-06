import { combineReducers } from 'redux';
import location from '../location/_state/LocationReducer';

const reducer = (
  state = false,
  action,
) => {
  switch (action.type) {
    case 'FILTER_ERROR':
      return action.bool;
    default:
      return state;
  }
};

export default combineReducers({
  location,
  error: reducer,
});
