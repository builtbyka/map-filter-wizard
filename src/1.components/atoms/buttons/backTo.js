import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import useStyles from './style';

const Back = ({ back, link }) => {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.backTo}`}
      onClick={() => navigate(`/${link}`)}
    >
      <ArrowBackIosIcon />
      Back To {back}
    </Button>
  )
  ; 
};

Back.propTypes = {
  link: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
};
export default Back;
