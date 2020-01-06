import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

// atoms
import FormPrompt from '../../atoms/notifications/FormPrompts';

import useStyles from './style';

// Filters
import Location from './location/Location';


import { numberOfProperties, filterError } from './_state/FilterSelectors';

function FilterWrap() {
  const classes = useStyles();
  const properties = useSelector(numberOfProperties);
  const error = useSelector(filterError);
  return (
    <article className={classes.filterWrap}>
      <div className={classes.filterHeaderWrap}>
        <h1 className={classes.filterHeader}>{`We have ${properties} properties available`}</h1>
        <p className={classes.filterText}>To further refiine your search, use options below</p>
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
      <div className={classes.filterScroll}>
        <Location />
        <section>
          Section
        </section>
        Another bit
      </div>
    </article>
  );
}

export default FilterWrap;
