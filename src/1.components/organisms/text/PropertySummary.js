import React from 'react';
import PropTypes from 'prop-types';

import TextHeader from '../../atoms/headers/text/TextHeader';

import useStyles from './style';

const PropertySummary = ({ property }) => {
  const classes = useStyles();
  return (
    <div className={classes.summary}>
      <TextHeader title="Property" name={property.name} />
      <section className={classes.summarySections}>
        <p>Section</p>
      </section>
      <section className={classes.summarySections}>
        <p>Section</p>
      </section>
      <section className={classes.summarySections}>
        <p>Section</p>
      </section>
    </div>
  );
};

PropertySummary.propTypes = {
  property: PropTypes.instanceOf(Object).isRequired,
};

export default PropertySummary;
