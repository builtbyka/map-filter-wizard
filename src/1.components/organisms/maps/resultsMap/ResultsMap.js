import React from 'react';
import { useSelector } from 'react-redux';

import MapHandler from '../MapHandler';

import { topFiltered, locationSelected, filteredData } from '../../filters/_state/FilterSelectors';

const ResultsMap = () => {
  // get top sorted filtered data and use that ltlng
  const topFD = useSelector(topFiltered);
  const coords = { lat: topFD.latitude, lng: topFD.longitude };
  const location = useSelector(locationSelected);
  const geoMark = location.coordinates.lat < 1 ? null : location;
  const data = useSelector(filteredData);
  const options = (coords.lat < 1
    ? {
      zoom: 6,
      center: { lat: 54.97090149, lng: -4.45717253 },
      mapTypeControlOptions: {
        position: window.google.maps.ControlPosition.BOTTOM_LEFT,
      },
    }
    : {
      zoom: 14,
      center: coords,
      mapTypeControlOptions: {
        position: window.google.maps.ControlPosition.BOTTOM_LEFT,
      },
    });
  return (<MapHandler options={options} data={data} geoMark={geoMark} />);
};

export default ResultsMap;
