import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './style';

const Milestone = (props) => {
  const { stage, milestones } = props;
  const classes = useStyles();
  const ms = milestones.indexOf(stage) > -1 ? (
    <div className={classes.milestone}>
      {`Step ${milestones.indexOf(stage) + 1} 
      of ${milestones.length}`}
    </div>
  ) : null;
  return ms;
};

Milestone.propTypes = {
  stage: PropTypes.string.isRequired,
  milestones: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Milestone;
