import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  filterWrap: {
    boxShadow: '2px 0px 6px 0px rgba(0, 0, 0, 0.2)',
    height: 'calc(100vh - 72px)',
    padding: '32px 0',
    position: 'relative',
    zIndex: 2,
    '& section': {
      padding: '0',
      width: '100%',
    },
    '& section:nth-child(even)': {
      background: 'rgba(139, 159, 177, 0.1)',
      padding: 10,
      margin: '15px 0',
    },
  },
  filterScroll: {
    height: 'calc(100vh - 250px)',
    padding: '0 48px 40px',
    overflowY: 'auto',
  },
  filterHeaderWrap: {
    padding: '0 48px',
  },
  filterHeader: {
    color: 'rgb(14, 78, 102)',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 24,
  },
  filterText: {
    color: 'rgb(139, 159, 177)',
    fontSize: 16,
  },
}));

export default useStyles;
