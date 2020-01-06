/* eslint-disable func-names */
import { difference, intersection } from 'lodash';
import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Map from '../../molecules/map/Map';
import { filteredData } from '../filters/_state/FilterSelectors';
import SummaryModal from '../../molecules/map/SummaryModal';

const MapHandler = ({
  options, markersOn, infoOn, geoMark,
}) => {
  const [map, setMap] = useState(undefined);
  const [marks, setMarks] = useState({});
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [geo, setGeo] = useState({});
  const data = useSelector(filteredData);

  const addGeoMarkers = (gm) => {
    const marker = new window.google.maps.Marker({
      position: { lat: gm.coordinates.lat, lng: gm.coordinates.lng },
      animation: window.google.maps.Animation.DROP,
    });
    setGeo({ ...geo, [gm.words]: marker });
  };

  const hideMarkers = (hm) => {
    hm.forEach((dat, i) => {
      setTimeout(() => { marks[dat].setMap(null); }, i * 4);
    });
  };

  const showMarkers = (sm) => {
    sm.forEach((dat, i) => {
      setTimeout(() => { marks[dat].setMap(map); }, i * 4);
    });
  };

  const addMarkers = (am) => {
    const markers = {};

    am.forEach((dat) => {
      const marker = new window.google.maps.Marker({
        position: { lat: dat.latitude, lng: dat.longitude },
        title: dat.name,
        animation: window.google.maps.Animation.DROP,
        id: dat.id,
      });
      marker.addListener('click', (e) => {
        setSelectedMarker({
          cont: data.filter((da) => da.id === marker.id)[0],
          top: e.ya.clientY,
          left: e.ya.clientX,
        });
        setModalOpen(true);
      });
      markers[dat.id] = marker;
    });
    setMarks({ ...marks, ...markers });
  };

  const action = useCallback(
    (mappy) => setMap(mappy),
    [setMap],
  );

  useEffect(() => {
    if (map && markersOn) {
      const markArr = Object.keys(marks);
      const datArr = data.map((dat) => dat.id);
      const dataDiff = difference(datArr, markArr);
      const markerDiff = difference(markArr, datArr);
      const dataSame = intersection(markArr, datArr);

      // if markers don't currently exist
      if (dataDiff.length > 0) {
        const toAdd = data.filter((dat) => dataDiff.includes(dat.id));
        addMarkers(toAdd);
      }
      // hide markers if not in data and visible
      if (markerDiff.length > 0) {
        const toHide = Object.keys(marks).filter((mark) => markerDiff.includes(mark));
        hideMarkers(toHide);
      }
      // show marker if in both data and marker
      if (dataSame.length > 0) {
        const toShow = Object.keys(marks).filter((mark) => dataSame.includes(mark));
        showMarkers(toShow);
      }
      if (geoMark) {
        if (geo[geoMark.words]) {
          Object.keys(geo).forEach((g) => {
            if (g === geoMark.words) {
              geo[geoMark.words].setMap(map);
            } else {
              geo[geoMark.words].setMap(null);
            }
          });
        } else {
          addGeoMarkers(geoMark);
        }
      }
    }
  });
  const ind = selectedMarker ? data.findIndex((x) => x.id === selectedMarker.cont.id) : 0;
  return (
    <div>
      {infoOn && selectedMarker
      && (
      <Modal
        aria-labelledby="gmap"
        aria-describedby="gmap"
        open={modalOpen}
        onClose={() => {
          setSelectedMarker(null);
          setModalOpen(false);
        }}
        closeAfterTransition
      >
        <Fade
          in={modalOpen}
        >
          <div>
            <SummaryModal selected={selectedMarker} ind={ind + 1} indText={`${ind + 1} of ${data.length}`} />
          </div>
        </Fade>
      </Modal>
      )}
      <Map options={options} action={action} />
    </div>
  );
};

MapHandler.defaultProps = {
  markersOn: true,
  infoOn: true,
  geoMark: null,
};

MapHandler.propTypes = {
  options: PropTypes.instanceOf(Object).isRequired,
  geoMark: PropTypes.instanceOf(Object),
  markersOn: PropTypes.bool,
  infoOn: PropTypes.bool,
};

export default MapHandler;
