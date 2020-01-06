import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mainTitle: {
    color: 'rgb(139, 159, 177)',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 24,
    lineHeight: '36px',
  },
  instructionTitle: {
    color: 'rgb(14, 78, 102)',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 32,
    lineHeight: '40px',
    width: 408,
  },
  blurb: {
    color: 'rgb(14, 78, 102)',
    fontSize: 20,
    lineHeight: '30px',
  },
}));

export default useStyles;
