/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useState, useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';

// material ui
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import LocationCityIcon from '@material-ui/icons/LocationCity';

// atoms
import FormHeader from '../../../atoms/headers/form/FormHeader';
import FormPrompt from '../../../atoms/notifications/FormPrompts';

// redux
import { updateLocation, updateActiveLocation } from './_state/LocationActions';
import { locationActive } from './_state/LocationSelectors';
import { locationPostcode } from '../_state/FilterSelectors';

// style
import useStyles from './style';

// helpers
import { letterAtStart } from '../../../../utils/helpers';

function Location({ title }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  let typingTimer;
  const locationIsActive = useSelector(locationActive);
  const val = useSelector(locationPostcode);

  const tf = useRef(null);
  const doneTypingInterval = 250;
  const [locationError, setLocationError] = useState(false);
  const [locationSet, setLocationSet] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [geoNote, setGeoNote] = useState((val === ' '));

  const action = useCallback(
    () => dispatch(updateActiveLocation()),
    [dispatch],
  );

  function handleLocation() {
    if (!locationLoading) setLocationLoading(true);
    if (locationSet) setLocationSet(false);
    if (locationError) setLocationError(false);
    if (geoNote) setGeoNote(false);
    const { value } = tf.current.getElementsByTagName('input')[0];
    if (value.length > 3) {
      if (letterAtStart(value)) {
        fetch(`https://api.postcodes.io/postcodes/${value}`)
          .then((response) => response.json())
          .then((json) => {
            if (json.status === 200) {
              setLocationLoading(false);
              console.log(json.result);
              const { postcode } = json.result;
              if (!locationIsActive) action();
              dispatch(updateLocation({ postcode }));
            } else {
              setLocationLoading(false);
              setLocationError(true);
            }
          });
      } else {
        setLocationError(true);
      }
    }
  }

  function typing() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(handleLocation, doneTypingInterval);
  }

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormHeader title={title} styling={title === 'Location' ? 'secondaryNomargin' : 'secondary'} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            defaultValue={val}
            className={`${locationSet ? classes.valid : ''} ${classes.textfield}`}
            ref={tf}
            onKeyUp={typing}
            label="eg. 'RH17 7HH'"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <span>
                  <LocationCityIcon />
                </span>
              ),
              endAdornment: (
                <span>
                  {locationLoading ? <CircularProgress color="inherit" size={20} /> : null}
                </span>
              ),
            }}
          />
        </Grid>
        {locationError
        && (
        <Grid item xs={12}>
          <Fade in={locationError}>
            <div>
              <FormPrompt text="This is not a valid UK postcode" styling="warning" />
            </div>
          </Fade>
        </Grid>
        )}
        {locationSet
        && (
        <Grid item xs={12}>
          <Fade in={locationSet}>
            <div>
              <FormPrompt text="Location confirmed" styling="valid" />
            </div>
          </Fade>
        </Grid>
        )}
        {geoNote
        && (
        <Grid item xs={12}>
          <Fade in={geoNote}>
            <div>
              <FormPrompt text="Adding a location will help us tailor our results and give a recommendation that suits your needs." styling="geonote" />
            </div>
          </Fade>
        </Grid>
        )}
      </Grid>
    </section>
  );
}

Location.defaultProps = {
  title: 'Location',
};

Location.propTypes = {
  title: PropTypes.string,
};

export default Location;
