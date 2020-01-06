import React from 'react';
import PropTypes from 'prop-types';

// templates
import Container from '../../2.templates/Container';
import Half from '../../2.templates/Half';

// components
import WizardWrap from '../../1.components/organisms/wizard/WizardWrap';
import WizardResultsMap from '../../1.components/organisms/maps/resultsMap/WizardResultsMap';
import useStyles from './style';


const Wizard = (props) => {
  const { stage } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Half>
          <WizardWrap stage={stage} />
        </Half>
        <Half>
          <WizardResultsMap stage={stage} />
        </Half>
      </Container>
    </div>
  );
};

Wizard.propTypes = {
  stage: PropTypes.string.isRequired,
};

export default Wizard;
