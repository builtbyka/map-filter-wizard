import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';


const Sixth = (props) => {
  const { children } = props;
  return (
    <Grid item xs={2}>
      {children}
    </Grid>
  );
};

Sixth.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Sixth;
