import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  list: {
    backgroundColor: '#ecf4fd',
    height: 'calc(100vh - 72px)',
    paddingTop: 80,
  },
  listWrap: {
    height: 'calc(100vh - 180px)',
    overflowY: 'scroll',
  },
  hidden: {
    color: '#ecf4fd',
  },
  headerRow: {
    backgroundColor: '#ecf4fd',
  },
  table: {
    width: 'calc(100% - 64px)',
    margin: '0 32px',
  },
  row: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#009ddc',
      '& *': {
        color: 'white',
      },
    },
  },
  header: {
    color: 'rgb(139, 159, 177)',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 14,
    lineHeight: '24px',
    padding: 14,
  },
  mainCell: {
    fontFamily: 'HelveticaNeueBold',
  },
  cell: {
    color: 'rgb(14, 78, 102)',
    fontSize: 14,
  },
}));

export default useStyles;
