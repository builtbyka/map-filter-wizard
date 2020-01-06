import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// templates
import Container from '../../2.templates/Container';
import Full from '../../2.templates/Full';
import Quarter from '../../2.templates/Quarter';
import Half from '../../2.templates/Half';

import MapBanner from '../../1.components/organisms/maps/propertyMap/PropertyMap';
import PropertySummary from '../../1.components/organisms/text/PropertySummary';
import BackTo from '../../1.components/atoms/buttons/backTo';

import { getData } from '../../1.components/organisms/filters/_state/FilterSelectors';


import useStyles from './style';

const Property = ({ property }) => {
  const classes = useStyles();
  const properties = useSelector(getData);
  const s = properties.filter((sit) => sit.id === property)[0];
  return (
    <div className={classes.root}>
      <Container>
        <Full>
          <MapBanner property={s} />
        </Full>
        <Quarter>
          <BackTo link="./result/map" back="results" />
        </Quarter>
        <Half>
          <PropertySummary property={s} />
        </Half>
      </Container>
    </div>
  );
};

Property.defaultProps = {
};

Property.propTypes = {
  property: PropTypes.string.isRequired,
};

export default Property;
