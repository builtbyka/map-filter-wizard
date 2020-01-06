import React from 'react';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import useStyles from './style';

const Logo = () => {
  const classes = useStyles();
  return (
    <h1 className={classes.logo}>
      <HomeWorkIcon className={classes.logoIcon} />
      Find My Home
    </h1>
  );
};


export default Logo;
