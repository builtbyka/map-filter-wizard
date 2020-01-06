import React from 'react';
import PropTypes from 'prop-types';
import Map from '../../../molecules/map/Map';

const PropertyMap = ({ property }) => {
  const options = {
    zoom: 14,
    center: { lat: property.latitude, lng: property.longitude },
    disableDefaultUI: true,
  };
  return (<Map options={options} />);
};

PropertyMap.propTypes = {
  property: PropTypes.instanceOf(Object).isRequired,
};

export default PropertyMap;
