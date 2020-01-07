import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

// atoms
import FormPrompt from '../../atoms/notifications/FormPrompts';

// molecules
import LocationWizard from '../filters/location/LocationWizard';
import PrevNext from '../../molecules/nav/prevNext/PrevNext';
import MileStone from '../../atoms/nav/Milestone';

import { mileStones } from './_state/WizardSelectors';
import routes from '../../../routes/routes';
import { filterError } from '../filters/_state/FilterSelectors';


import useStyles from './style';

function Wizard({ stage }) {
  const classes = useStyles();
  const error = useSelector(filterError);

  return (
    <article className={classes.wizardWrap}>
      <div className={classes.wizardScroll}>
        <div className={classes.wizard}>
          <MileStone stage={stage} milestones={mileStones} />
          {stage === 'location'
            && (
            <LocationWizard stage={stage} title="Enter the postcode of your desired location" />
            )}
          {error
            && (
            <Grid item xs={12}>
              <Fade in={error}>
                <div>
                  <FormPrompt text="Your current configuration produces no results." styling="warning" />
                </div>
              </Fade>
            </Grid>
            )}
        </div>
      </div>
      <PrevNext stage={stage} routes={routes[stage]} />
    </article>
  );
}

Wizard.propTypes = {
  stage: PropTypes.string.isRequired,
};

export default Wizard;
