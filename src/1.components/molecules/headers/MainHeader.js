import React from 'react';

import Logo from '../../atoms/headers/text/Logo';

import useStyles from './style';

const MainHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.main}>
      <Logo />
    </header>
  );
};


export default MainHeader;
