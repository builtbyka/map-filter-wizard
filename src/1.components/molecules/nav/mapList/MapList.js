import React from 'react';
import PropType from 'prop-types';

import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
import View from '../../../atoms/buttons/view';

import useStyles from './style';

function MapList({ view }) {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <View active={view === 'map'} text="Map" link="./result/map" icon={<MapIcon />} />
      <View active={view === 'list'} text="List" link="./result/list" icon={<ListIcon />} />
    </div>
  );
}

MapList.propTypes = {
  view: PropType.string.isRequired,
};

export default MapList;
