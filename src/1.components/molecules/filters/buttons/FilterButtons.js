/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// material ui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// atoms
import FormHeader from '../../../atoms/headers/form/FormHeader';

// style
import useStyles from './style';
import globalStyles from '../../../../utils/globalStyles';

function FilterButtons(props) {
  const {
    buttons,
    title,
    styling,
    condition,
    icons,
    actions,
    styleClass,
    grid,
    gridCondition,
    withHeader,
  } = props;
  const classes = useStyles();
  const global = globalStyles();
  return (
    <section className={global.formSection}>
      <Grid container spacing={2}>
        {withHeader
          && <FormHeader title={title} styling={styling} />}
        {
            buttons.map((button) => {
              const val = button.value || button;
              const text = button.text || button;
              const icon = button.icon || button;

              return (
                <Grid
                  key={val}
                  item
                  xs={
                  gridCondition.length > 0
                    ? gridCondition(val)
                    : grid
                }
                >
                  <Button
                    classes={{ root: global.filterButton }}
                    variant="outlined"
                    onClick={() => {
                      actions.map((action) => action(val));
                    }}
                    className={`
                    ${classes[styleClass]} 
                    ${condition(val)}`}
                  >
                    {icons[icon]}
                    {text}
                  </Button>
                </Grid>
              );
            })
        }
      </Grid>
    </section>
  );
}

FilterButtons.defaultProps = {
  styleClass: '',
  styling: '',
  condition: () => {},
  gridCondition: () => {},
  grid: 4,
  icons: {},
  actions: [],
  withHeader: true,
};

FilterButtons.propTypes = {
  buttons: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  styling: PropTypes.string,
  styleClass: PropTypes.string,
  condition: PropTypes.func,
  gridCondition: PropTypes.func,
  grid: PropTypes.number,
  icons: PropTypes.instanceOf(Object),
  actions: PropTypes.array,
  withHeader: PropTypes.bool,
};

export default FilterButtons;
