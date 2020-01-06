import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// atoms
import FormHeader from '../../../atoms/headers/form/FormHeader';

// styles
import useStyles from './style';
import globalStyles from '../../../../utils/globalStyles';

function InputFilter(props) {
  const {
    title, action,
  } = props;
  const classes = useStyles();
  const global = globalStyles();
  return (
    <section className={global.formSection}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormHeader title={title} styling="secondary" />
        </Grid>
        <Grid item xs={12}>
          <div>
            <TextField
              variant="outlined"
              onChange={(e) => action(e.target.value)}
              className={classes.input}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

InputFilter.defaultProps = {
  action: () => {},
};

InputFilter.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default InputFilter;
