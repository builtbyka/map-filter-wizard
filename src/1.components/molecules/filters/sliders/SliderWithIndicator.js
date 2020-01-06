import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

// atoms
import FormHeader from '../../../atoms/headers/form/FormHeader';

// styles
import useStyles from './style';
import globalStyles from '../../../../utils/globalStyles';

function Select(props) {
  const {
    title,
    styling,
    measure,
    min,
    max,
    step,
    action,
    amount,
    disabled,
    singleIndicator,
  } = props;
  const classes = useStyles();
  const global = globalStyles();
  const indicator = singleIndicator ? `${measure} ${amount.toLocaleString()}` : `${amount.toLocaleString()} - ${max.toLocaleString()} ${measure}`;
  return (
    <section className={`${global.formSection} ${disabled ? 'section-disabled' : ''}`}>
      <Grid container spacing={2} style={{ alignItems: 'center' }}>
        <Grid item xs={6}>
          <FormHeader title={title} styling={styling} />
        </Grid>
        <Grid item xs={6} className={classes.flex}>
          <div className={`${classes.mwInfo} ${classes.flex}`}>
            {indicator}
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Slider
          className={global.filterSlider}
          step={step}
          min={min}
          max={max}
          defaultValue={amount}
          value={amount}
          disabled={disabled}
          marks={[
            {
              value: min,
              label: min,
            },
            {
              value: max,
              label: max.toLocaleString(),
            },
          ]}
          onChange={(e, val) => {
            action(val);
          }}
          aria-labelledby="input-slider"
        />
      </Grid>
    </section>
  );
}

Select.defaultProps = {
  min: 0,
  max: 1000,
  step: 1,
  action: () => {},
  amount: 0,
  singleIndicator: false,
  disabled: false,
};

Select.propTypes = {
  title: PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  action: PropTypes.func,
  amount: PropTypes.number,
  singleIndicator: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Select;
