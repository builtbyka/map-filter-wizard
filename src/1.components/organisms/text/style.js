import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  summarySections: {
    borderTop: '1px solid rgb(205, 217, 236)',
    marginBottom: 20,
    '& h1': {
      color: 'rgb(139, 159, 177)',
      fontFamily: 'HelveticaNeueBold',
      fontSize: 24,
      margin: '5px 0 10px',
    },
    '& h2': {
      fontFamily: 'HelveticaNeue',
      fontSize: 24,
      margin: '5px 0',
    },
    '& p': {
      margin: '5px 0',
    },
    '& .subHead': {
      color: 'rgb(139, 159, 177)',
      fontFamily: 'HelveticaNeueBold',
      fontSize: 12,
      textTransform: 'uppercase',
    },
    '& .info': {
      fontFamily: 'HelveticaNeueBold',
      fontSize: 24,
      color: 'rgb(14, 78, 102)',
      textTransform: 'capitalize',
      marginBottom: 20,
      '& ul': {
        margin: 0,
        listStyle: 'none',
        padding: 0,
      },
    },
    '& .sidenote': {
      color: 'rgb(139, 159, 177)',
      fontSize: 16,
    },
    '& .detailHead': {
      color: 'rgb(14, 78, 102)',
      fontFamily: 'HelveticaNeueBold',
      fontSize: 16,
      margin: '25px 0 20px',
      textTransform: 'uppercase',
    },
    '& .detailProperty': {
      color: 'rgb(139, 159, 177)',
      fontFamily: 'HelveticaNeueBold',
      fontSize: 16,
    },
    '& .detail': {
      color: 'rgb(14, 78, 102)',
      fontSize: 16,
      marginBottom: 10,
    },
  },
  summary: {
    marginBottom: 120,
  },
}));

export default useStyles;
