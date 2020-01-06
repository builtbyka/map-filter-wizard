import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';
import Button from '@material-ui/core/Button';

import useStyles from './style';

const View = ({
  link, text, icon, active,
}) => {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.view} ${active ? 'active' : ''}`}
      onClick={() => navigate(`/${link}`)}
    >
      { text }
      <span className={`${classes.icon}`}>{ icon }</span>
    </Button>
  );
};

View.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object).isRequired,
  active: PropTypes.bool.isRequired,
};

export default View;
