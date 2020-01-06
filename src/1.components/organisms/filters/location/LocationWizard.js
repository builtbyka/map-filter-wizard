/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';

import Location from './Location';
// atoms
import FormHeader from '../../../atoms/headers/form/FormHeader';

function LocationWizard({ title }) {
  return (
    <section>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormHeader title="Where would you like to live?" styling="main" />
          </Grid>
        </Grid>
        <Location title={title} />
      </div>
    </section>
  );
}

LocationWizard.defaultProps = {
  title: 'Location',
};

LocationWizard.propTypes = {
  title: PropTypes.string,
};

export default LocationWizard;
