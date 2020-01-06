import { createSelector } from 'reselect';

// error
export const getFilters = (state) => state.filters;
export const allFilters = createSelector(
  [getFilters],
  (filters) => filters,
);
export const getFilterError = (state) => state.filters.error;
export const filterError = createSelector(
  [getFilterError],
  (error) => error,
);

// data
export const getData = (state) => state.properties.all;
export const data = createSelector(
  [getData],
  (dat) => dat,
);
export const getFilteredData = (state) => state.properties.filtered;
export const filteredData = createSelector(
  [getFilteredData],
  (dat) => dat,
);
export const numberOfProperties = createSelector(
  [getFilteredData],
  (properties) => Object.keys(properties).length,
);
export const topFiltered = createSelector(
  [getFilteredData],
  (dat) => dat[0],
);

// location
export const getLocationSelected = (state) => state.filters.location;
export const locationSelected = createSelector(
  [getLocationSelected],
  (location) => location,
);
export const getLocationPostcode = (state) => state.filters.location.postcode;
export const locationPostcode = createSelector(
  [getLocationPostcode],
  (postcode) => postcode,
);
export const getLocationltlng = (state) => state.filters.location.coordinates;
export const locationltlng = createSelector(
  [getLocationltlng],
  (coordinates) => coordinates,
);
