import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';

import useStyles from './style';

import MainHeader from '../1.components/molecules/headers/MainHeader';

const Wrapper = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div>
      <MainHeader />
      <main className={classes.main}>
        <CssBaseline />
        <Grid container>
          {children}
        </Grid>
      </main>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Wrapper;
