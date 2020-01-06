import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';


const Half = (props) => {
  const { children } = props;
  return (
    <Grid item xs={6}>
      {children}
    </Grid>
  );
};

Half.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Half;
