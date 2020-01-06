import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';
import Button from '@material-ui/core/Button';

import useStyles from './style';

const Email = ({
  text, emailAdd, emailCont, link,
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={`${classes.email}`}
      onClick={() => navigate(`/${link}`)}
    >
      <a href={`mailto:${emailAdd}${emailCont}`}>
        {text}
      </a>
    </Button>
  );
};

Email.propTypes = {
  emailAdd: PropTypes.string.isRequired,
  emailCont: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default Email;
