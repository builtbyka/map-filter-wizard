import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import useStyles from './style';

function FormHeader(props) {
  const { styling, title } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <header>
        <h1 className={classes[styling]}>{title}</h1>
      </header>
    </Grid>
  );
}

FormHeader.propTypes = {
  styling: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormHeader;
