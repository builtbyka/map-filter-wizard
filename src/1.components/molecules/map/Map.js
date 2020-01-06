/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { functions, isEqual, omit } from 'lodash';
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';

function Map({ options, action }) {
  const ref = useRef();
  const classes = useStyles();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, options);
    if (action !== null) {
      action(map);
    }
  }, [action, options]);

  return (
    <div className={`${classes.map} ${action === null ? classes.mapBanner : ''}`} ref={ref}>Loading...</div>
  );
}

const shouldUpdate = (prevProps, nextProps) => {
  const pp = prevProps;
  delete pp.options.mapTypeId;
  const [prevFuncs, nextFuncs] = [functions(prevProps), functions(nextProps)];
  return (
    isEqual(omit(prevProps, prevFuncs), omit(nextProps, nextFuncs))
    && prevFuncs.every((fn) => prevProps[fn].toString() === nextProps[fn].toString())
  );
};

export default React.memo(Map, shouldUpdate);

Map.defaultProps = {
  options: {
    zoom: 6,
    center: {
      lat: 54.97090149,
      lng: -4.45717253,
    },
  },
  action: null,
};

Map.propTypes = {
  options: PropTypes.instanceOf(Object),
  action: PropTypes.func,
};
