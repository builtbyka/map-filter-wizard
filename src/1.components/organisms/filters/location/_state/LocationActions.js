/* eslint-disable import/prefer-default-export */
import {
  LOCATION_UPDATE,
  LOCATION_ACTIVE,
} from './LocationActionTypes';

export function updateLocation(location) {
  return { type: LOCATION_UPDATE, location };
}

export function updateActiveLocation() {
  return { type: LOCATION_ACTIVE };
}