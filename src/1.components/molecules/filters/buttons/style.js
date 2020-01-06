
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  topIconButton: {
    height: 112,
    '& .MuiButton-label': {
      paddingTop: '50px',
    },
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      top: 26,
    },
  },
  sideIconButton: {
    height: 72,
    '& .MuiButton-label': {
      fontFamily: 'HelveticaNeueBold !important',
      position: 'absolute',
      left: '50%',
      marginLeft: -45,
      textAlign: 'center',
      width: 150,
    },
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      left: '-20px',
    },
    '& .iconLong': {
      position: 'absolute',
      left: '0',
    },
  },
}));

export default useStyles;
