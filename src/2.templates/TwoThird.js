import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';


const TwoThird = (props) => {
  const { children } = props;
  return (
    <Grid item xs={8}>
      {children}
    </Grid>
  );
};

TwoThird.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default TwoThird;
