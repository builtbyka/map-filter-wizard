import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import useStyles from './style';

const Back = ({ link }) => {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.navButtons}  ${classes.back}`}
      onClick={() => navigate(`/${link}`)}
    >
      <ArrowBackIosIcon />
      Back
    </Button>
  )
  ; 
};

Back.propTypes = {
  link: PropTypes.string.isRequired,
};
export default Back;
