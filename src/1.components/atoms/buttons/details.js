import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './style';

const Details = ({
  link,
}) => {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.details}`}
      onClick={() => {
        navigate(`/property/${link}`);
      }}
    >
      Details
      <ArrowForwardIcon />
    </Button>
  );
};

Details.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Details;
