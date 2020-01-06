import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// atoms
import FormHeader from '../../../atoms/headers/form/FormHeader';

// styles
import useStyles from './style';
import globalStyles from '../../../../utils/globalStyles';

function SelectFilter(props) {
  const {
    title, action, val, def, selections,
  } = props;
  const classes = useStyles();
  const global = globalStyles();
  const chosen = selections.includes(val) ? val : def;
  return (
    <section className={global.formSection}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormHeader title={title} styling="secondary" />
        </Grid>
        <Grid item xs={12}>
          <div>
            <Select
              variant="outlined"
              value={chosen}
              onChange={(e) => action(e.target.value)}
              className={classes.select}
            >
              <MenuItem value={def}>Not on the list</MenuItem>
              {selections.map((item) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))}

            </Select>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

SelectFilter.defaultProps = {
  action: () => {},
};

SelectFilter.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
  val: PropTypes.string.isRequired,
  selections: PropTypes.instanceOf(Array).isRequired,
  def: PropTypes.string.isRequired,
};

export default SelectFilter;
