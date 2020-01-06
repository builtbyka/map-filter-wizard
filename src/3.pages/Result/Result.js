import React from 'react';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';

// templates
import Container from '../../2.templates/Container';
import Third from '../../2.templates/Third';
import TwoThird from '../../2.templates/TwoThird';

// map
import ResultsMap from '../../1.components/organisms/maps/resultsMap/ResultsMap';
import ResultsList from '../../1.components/organisms/lists/resultsList/ResultsList';
import MapList from '../../1.components/molecules/nav/mapList/MapList';

// filters
import FilterWrap from '../../1.components/organisms/filters/FilterWrap';
import useStyles from './style';

const Result = ({ view }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Third>
          <FilterWrap />
        </Third>
        <TwoThird>
          <MapList view={view} />
          {view === 'map'
           && (
           <Fade
             in={view === 'map'}
             style={{
               transitionDelay: view === 'map' ? '200ms' : '0ms',
             }}
           >
             <div>
               <ResultsMap />
             </div>
           </Fade>
           )}
          {view === 'list'
           && (
           <Fade
             in={view === 'list'}
             style={{
               transitionDelay: view === 'list' ? '200ms' : '0ms',
             }}
           >
             <div>
               <ResultsList />
             </div>
           </Fade>

           )}
        </TwoThird>
      </Container>
    </div>
  );
};

Result.defaultProps = {
  view: 'map',
};

Result.propTypes = {
  view: PropTypes.string,
};

export default Result;
