import React from 'react';
import { useSelector } from 'react-redux';

import MapHandler from '../MapHandler';

import { filteredData } from '../../filters/_state/FilterSelectors';

const WizardResultsMap = () => {
  const data = useSelector(filteredData);
  const options = {
    zoom: 6,
    center: {
      lat: 54.97090149,
      lng: -4.45717253,
    },
    mapTypeControlOptions: {
      position: window.google.maps.ControlPosition.BOTTOM_LEFT,
    },
  };
  return (
    <MapHandler
      options={options}
      data={data}
      markersOn
      infoOn={false}
    />
  );
};

export default WizardResultsMap;
