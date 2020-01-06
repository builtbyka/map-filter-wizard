import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    top: 80,
    flexGrow: 1,
    height: 80,
    padding: '10px 32px',
    position: 'absolute',
    zIndex: 1,
  },
}));

export default useStyles;
