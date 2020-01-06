import React from 'react';
import PropTypes from 'prop-types';

// material ui
import WarningIcon from '@material-ui/icons/Warning';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useStyles from './style';

function FormPrompts(props) {
  const { styling, text } = props;
  const classes = useStyles();
  const icons = {
    valid: <CheckCircleIcon />,
    warning: <WarningIcon />,
    geonote: <GpsFixedIcon />,
  };
  return (
    <div className={`${classes.prompt} ${classes[styling]}`}>
      <span className={classes.icon}>{icons[styling]}</span>
      <p>{text}</p>
    </div>
  );
}

FormPrompts.propTypes = {
  styling: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormPrompts;
