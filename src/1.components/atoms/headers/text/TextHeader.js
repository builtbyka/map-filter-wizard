import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import useStyles from './style';

function TextHeader(props) {
  const { title, name } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <header>
        <h1 className={classes.title}>{title}</h1>
        <h2 className={classes.name}>{name}</h2>
      </header>
    </Grid>
  );
}

TextHeader.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextHeader;
