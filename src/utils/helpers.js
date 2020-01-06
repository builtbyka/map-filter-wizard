/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */
import { defaultDistance } from './defaultValues';

export const setAll = (obj, val) => Object.keys(obj).forEach((k) => obj[k] = val);

export const setAllBut = (obj, val, but, butVal) => Object.keys(obj).forEach(
  (k) => (k === but ? obj[k] = butVal : obj[k] = val),
);

export const allTrue = (obj) => Object.keys(obj).every((key) => obj[key]);

export const letterAtStart = (str) => typeof str === 'string' && str.charAt(0).toLowerCase() !== str.charAt(0).toUpperCase();
export const numberAtStart = (str) => typeof str === 'string' && str.charAt(0) >= '0' && str.charAt(0) <= '9';
export const isNumberBetween = (str, f, t) => typeof str === 'string' && str.charAt(0) >= f && str.charAt(0) <= t;

export const distance = (lat1, lon1, lat2, lon2, unit) => {
  let dist = (unit === 'km' ? (defaultDistance / 100) : defaultDistance);
  if ((lat1 > 0 && lat2 > 0) && ((lat1 !== lat2) || (lon1 !== lon2))) {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    dist = Math.sin(radlat1)
    * Math.sin(radlat2)
    + Math.cos(radlat1)
    * Math.cos(radlat2)
    * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === 'km') { dist *= 1.609344; }
    if (unit === 'metres') { dist *= 100; }
    return Math.round(dist * 100) / 100;
  }
  return Math.round(dist * 100) / 100;
};

export const sortDistance = (a, b) => {
  if (a.distance_from_chosen_location_km < b.distance_from_chosen_location_km) {
    return -1;
  }
  if (a.distance_from_chosen_location_km > b.distance_from_chosen_location_km) {
    return 1;
  }
  return 0;
};

export const estimatedCost = (total, cc, dist) => total + (cc * (dist * 100));

export const sortCost = (a, b) => {
  if (a.estimated_cost < b.estimated_cost) {
    return -1;
  }
  if (a.estimated_cost > b.estimated_cost) {
    return 1;
  }
  return 0;
};
