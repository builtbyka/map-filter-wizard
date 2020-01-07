import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  valid: {
    '&.MuiFormControl-root': {
      backgroundColor: 'rgb(229, 248, 237)',
    },
  },
  textfield: {
    '& .MuiOutlinedInput-inputAdornedEnd': {
      paddingLeft: 15,
    }
  }
}));

export default useStyles;
