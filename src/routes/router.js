/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from '@material-ui/core/Fade';

import Wizard from '../3.pages/Wizard/Wizard';
import Result from '../3.pages/Result/Result';
import Property from '../3.pages/Property/Property';

const routes = {
  '/': () => <Wizard stage="location" />,
  '/:stage': ({ stage }) => <Wizard stage={stage} />,
  '/result/:view': ({ view }) => <Result view={view} />,
  '/property/:property': ({ property }) => (
    <Fade in>
      <div style={{ width: '100%' }}>
        <Property property={property} />
      </div>
    </Fade>
  ),
};

export default routes;
