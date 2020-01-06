/* eslint-disable no-case-declarations */
import {
  LOCATION_UPDATE,
  LOCATION_ACTIVE,
} from './LocationActionTypes';

import { defaultPostcode, defaultCoordinates } from '../../../../../utils/defaultValues';

const reducer = (state = {
  postcode: defaultPostcode,
  coordinates: defaultCoordinates,

}, action) => {
  switch (action.type) {
    case LOCATION_UPDATE:
      return action.location;
    default:
      return state;
  }
};

export const locationFlow = (state = { active: false }, action) => {
  switch (action.type) {
    case LOCATION_ACTIVE:
      return { ...state, active: true };
    default:
      return state;
  }
};

export default reducer;
