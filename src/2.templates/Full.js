import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';


const Full = (props) => {
  const { children } = props;
  return (
    <Grid item xs={12}>
      {children}
    </Grid>
  );
};

Full.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Full;
