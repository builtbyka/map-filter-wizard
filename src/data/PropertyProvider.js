import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import data from './properties.json';

const DefaultState = {
  propertyListings: [],
};

const PropertyListingsContext = React.createContext(DefaultState);

export const PropertyListingsConsumer = PropertyListingsContext.Consumer;

export const PropertyListingsProvider = (props) => {
  const { children } = props;
  const [propertyListings, setProperties] = useState([]);
  if (propertyListings.length < 1) {
    setProperties(data);
  }

  return (
    <PropertyListingsContext.Provider
      value={{
        propertyListings,
      }}
    >
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {children}
      </Grid>
    </PropertyListingsContext.Provider>
  );
};

PropertyListingsProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
