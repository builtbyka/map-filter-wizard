import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    background: 'rgb(14, 78, 102)',
    borderBottom: '1px solid #979797',
    height: 72,
    padding: '23px 0',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 3,
  },
}));

export default useStyles;
