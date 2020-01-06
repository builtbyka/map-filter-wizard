import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';


const Quarter = (props) => {
  const { children } = props;
  return (
    <Grid item xs={3}>
      {children}
    </Grid>
  );
};

Quarter.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Quarter;
