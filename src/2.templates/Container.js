import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';


const Container = (props) => {
  const { children } = props;
  return (
    <Grid container>
      {children}
    </Grid>
  );
};

Container.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Container;
