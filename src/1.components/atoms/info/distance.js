import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { distance } from '../../../utils/helpers';
import { locationSelected } from '../../organisms/filters/_state/FilterSelectors';


const Distance = ({ from }) => {
  const loc = useSelector(locationSelected);
  const dist = distance(from.latitude, from.longitude, loc.coordinates.lat, loc.coordinates.lng, 'km');
  return (
    <span>
      {dist}
      {' '}
       km
    </span>
  );
};

Distance.propTypes = {
  from: PropTypes.instanceOf(Object).isRequired,
};
export default Distance;
