import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    background: 'white',
    borderTop: '1px solid #979797',
    bottom: 0,
    flexGrow: 1,
    height: 80,
    padding: '0',
    position: 'absolute',
    width: '100%',
  },
}));

export default useStyles;
