import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

// atoms
import Back from '../../../atoms/buttons/back';
import Next from '../../../atoms/buttons/next';
import Skip from '../../../atoms/buttons/skip';

// style
import useStyles from './style';

const PrevNext = ({ stage, routes }) => {
  const classes = useStyles();
  const isActive = useSelector((state) => (state.flow[stage] ? state.flow[stage].active : false));
  return (
    <nav className={classes.nav}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={4} sm={2}>
          {routes.prev !== null
            && (
            <Fade in={routes.prev.length > 0}>
              <span>
                <Back link={routes.prev} />
              </span>
            </Fade>
            )}
        </Grid>
        <Grid item xs={4} sm={2}>
          {routes.skip !== null && routes.next !== null && !isActive
            && (
            <Fade
              in={routes.skip !== undefined || routes.next !== null}
              style={{
                transitionDelay: routes.skip !== undefined
                || routes.next !== null ? '200ms' : '0ms',
              }}
            >
              <span>
                <Skip
                  link={routes.skip || routes.next}
                />
              </span>
            </Fade>
            )}
        </Grid>
        <Grid item xs={4} sm={4}>
          {routes.next !== null
            && (
            <Fade
              in={routes.next !== null}
              style={{
                transitionDelay: routes.next !== null
                  ? '200ms' : '0ms',
              }}
            >
              <span>
                <Next
                  disabled={!isActive}
                  text={routes.nextText || 'Next'}
                  styling={routes.nextText ? 'filled' : ''}
                  link={routes.next}
                />
              </span>
            </Fade>
            )}
        </Grid>
      </Grid>
    </nav>
  );
};


PrevNext.propTypes = {
  routes: PropTypes.instanceOf(Object).isRequired,
  stage: PropTypes.string.isRequired,
};

export default PrevNext;
