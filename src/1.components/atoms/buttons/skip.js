import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';
import Button from '@material-ui/core/Button';

import useStyles from './style';

const Skip = ({ link }) => {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.navButtons}  ${classes.skip}`}
      onClick={() => navigate(`/${link}`)}
    >
      Skip
    </Button>
  );
};

Skip.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Skip;
