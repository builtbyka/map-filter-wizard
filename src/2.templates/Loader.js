import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './style';

const Loader = (props) => {
  const { children, prog } = props;
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <div className={classes.loaderInfo}>
        {children}
        <span>
          <CircularProgress variant="static" value={prog} />
        </span>
      </div>
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  prog: PropTypes.number.isRequired,
};

export default Loader;
