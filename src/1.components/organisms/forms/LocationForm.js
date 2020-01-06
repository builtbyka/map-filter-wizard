import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Fade from '@material-ui/core/Fade';

// molecules
import Location from '../../../filters/location/Location';

function LocationForm({ stage }) {
  return (
    <Fade
      in={stage === 'location'}
      style={{ transitionDelay: stage === 'location' ? '200ms' : '0ms' }}
    >
      <div>
        <Location />
      </div>
    </Fade>

  );
}

LocationForm.propTypes = {
  stage: PropTypes.string.isRequired,
};

export default LocationForm;
