import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './style';

const Next = ({
  disabled, link, styling, text, action,
}) => {
  const classes = useStyles();
  return (
    <Button
      disabled={disabled}
      className={`${classes.navButtons}  ${classes.next} ${styling}`}
      onClick={() => {
        if (action.action) action.action(action.params);
        navigate(`/${link}`);
      }}
    >
      {text}
      <ArrowForwardIosIcon />
    </Button>
  );
};

Next.defaultProps = {
  disabled: false,
  action: {},
};

Next.propTypes = {
  disabled: PropTypes.bool,
  link: PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.instanceOf(Object),
};

export default Next;
