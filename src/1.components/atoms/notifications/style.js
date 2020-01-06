import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  prompt: {
    padding: '16px 16px 16px 56px',
    position: 'relative',
    marginTop: 5,
    marginBottom: 15,
    '& p ': {
      margin: 0,
    },
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: '50%',
    marginTop: '-12px',
  },
  warning: {
    backgroundColor: 'rgba(255, 178, 91, 0.1)',
    '& svg': {
      fill: '#ffb25b',
    },
  },
  valid: {
    backgroundColor: 'rgb(229, 248, 237)',
    '& svg': {
      fill: 'rgb(2, 187, 83)',
    },
  },
  geonote: {
    backgroundColor: 'rgb(236, 244, 253)',
  },
}));

export default useStyles;
