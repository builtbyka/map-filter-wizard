import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    color: 'rgb(14, 78, 102)',
    fontSize: '32px',
    margin: '26px 0 5px',
  },
  name: {
    fontFamily: 'HelveticaNeueBold',
    color: 'rgb(14, 78, 102)',
    fontSize: '32px',
    margin: 0,
    marginBottom: 20,
  },
  logo: {
    fontFamily: 'HelveticaNeueBold',
    color: 'white',
    fontSize: '20px',
    margin: '0 30px 0 20px',
  },
  logoIcon: {
    marginRight: 10,
    verticalAlign: 'top',
  },
}));

export default useStyles;
