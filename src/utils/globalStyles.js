import { makeStyles } from '@material-ui/core/styles';

const globalStyles = makeStyles(() => ({
  formSection: {
    '&.section-disabled': {
      opacity: 0.5,
    },
  },
  filterSlider: {
    '& .MuiSlider-markLabel': {
      top: 38,
    },
    '&.MuiSlider-marked': {
      marginBottom: 40,
    },
    marginTop: 16,
    '& .MuiSlider-track': {
      background: 'rgb(205, 217, 236)',
      borderRadius: '8px 0px 0px 8px',
      height: '8px',
      opacity: 1,
    },
    '& .MuiSlider-rail': {
      background: '#00aff0',
      borderRadius: '8px 0px 0px 8px',
      height: '8px',
      opacity: 1,
    },
    '& .MuiSlider-thumb': {
      background: 'white',
      border: '3px solid #00aff0',
      height: 32,
      width: 32,
      marginTop: '-12px',
    },
  },
  filterButton: {
    borderRadius: 4,
    border: '2px solid rgb(205, 217, 236)',
    fontFamily: '"HelveticaNeue", "Arial" !important',
    textTransform: 'capitalize',
    width: '100%',
    '&:hover, &.active': {
      backgroundColor: '#00aff0',
      color: 'white',
      '& svg': {
        fill: 'white !important',
      },
    },
    '& .MuiSvgIcon-root': {
      color: '#00aff0',
      width: '36px',
      height: '36px',
    },
  },
  filterCheck: {
    '& .MuiIconButton-label': {
      color: '#00aff0',
    },
  },
}));

export default globalStyles;
