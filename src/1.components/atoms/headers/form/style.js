import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    color: '#011e3e',
    fontSize: 32,
    fontWeight: 'normal',
    height: 'auto',
    lineHeight: '40px',
    margin: '0 0 14px 0',
  },
  secondary: {
    fontSize: 14,
    margin: '15px 0 0',
    fontFamily: 'helveticaNeueBold',
  },
  secondaryNomargin: {
    fontSize: 14,
    margin: '0',
    fontFamily: 'helveticaNeueBold',
  },
}));

export default useStyles;
