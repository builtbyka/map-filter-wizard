
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  select: {
    marginTop: '-10px',
    width: '100%',
    '&:before': {
      borderColor: 'orange',
    },
    '&:after': {
      borderColor: 'orange',
    },
  },
}));

export default useStyles;
