import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    paddingTop: 72,
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
  },
  loaderInfo: {
    width: 300,
    height: 300,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-150px',
    marginLeft: '-150px',
    textAlign: 'center',
    '& h1': {
      color: 'white',
    },
    '& .MuiCircularProgress-colorPrimary': {
      color: '#fff',
    },
  },
}));

export default useStyles;
