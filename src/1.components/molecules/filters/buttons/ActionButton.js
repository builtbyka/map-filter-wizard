/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// style
import useStyles from './style';
import globalStyles from '../../../../utils/globalStyles';

function ActionButton(props) {
  const {
    icon,
    text,
    condition,
    action,
  } = props;
  const classes = useStyles();
  const global = globalStyles();
  return (
    <Grid container spacing={2} style={{ marginTop: 8 }}>
      <Grid
        item
        xs={12}
      >
        <Button
          classes={{ root: global.filterButton }}
          variant="outlined"
          onClick={() => {
            action(text.toLowerCase());
          }}
          className={`
                    ${classes.sideIconButton} 
                    ${condition()}
                    icon-long`}
        >
          {icon}
          {text}
        </Button>
      </Grid>
    </Grid>
  );
}

ActionButton.defaultProps = {
  icon: {},
  condition: () => {},
  action: () => {},
};

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object),
  condition: PropTypes.func,
  action: PropTypes.func,
};

export default ActionButton;
