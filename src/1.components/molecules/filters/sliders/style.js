
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mwInfo: {
    background: 'rgb(255, 255, 255)',
    borderRadius: '4px',
    border: '1px solid rgb(0, 175, 240)',
    height: '40px',
    width: '200px',
    fontFamily: 'HelveticaNeueBold !important',
    '& span': {
      justifyContent: 'center',
      textAlign: 'center',
    },
    marginTop: 30,
  },
}));

export default useStyles;
