import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Details from '../../atoms/buttons/details';
import Distance from '../../atoms/info/distance';

import useStyles from './style';

const SummaryModal = ({ selected, ind, indText }) => {
  const classes = useStyles();
  const {
    cont, top, left,
  } = selected;
  const { latitude, longitude } = cont;
  return (
    <div className={classes.modal} style={{ position: 'absolute', top: top - 320, left: left - 140 }}>
      <div className={classes.options}>
        {ind === 1
        && <span className={classes.note}>Cheapest Summary</span>}
        <span>{indText}</span>
      </div>
      <div className={classes.modalBody}>
        <div className={classes.modalHeader}>
          <h1 className={classes.modalTitle}>
            {cont.name}
          </h1>
          <Distance from={{ latitude, longitude }} />
          <span> from chosen location</span>
        </div>
        <Grid container className={classes.modalInfo}>
          <Grid item xs={6}>
            <p className={classes.summary}>Est. Total Cost</p>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.summary}>{`hello ${1 + 1}`}</p>
          </Grid>
          <Details link={cont.id} />
        </Grid>
      </div>
    </div>
  );
};

SummaryModal.propTypes = {
  selected: PropTypes.instanceOf(Object).isRequired,
  indText: PropTypes.string.isRequired,
  ind: PropTypes.number.isRequired,
};
export default SummaryModal;
