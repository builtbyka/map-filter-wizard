import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';


const Third = (props) => {
  const { children } = props;
  return (
    <Grid item xs={4}>
      {children}
    </Grid>
  );
};

Third.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Third;
