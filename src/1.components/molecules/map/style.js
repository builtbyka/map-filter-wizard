import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  map: {
    width: '100%',
    height: 'calc(100vh - 72px)',
    position: 'relative',
  },
  mapBanner: {
    height: '380px',
  },
  modal: {
    position: 'absolute',
    width: 280,
    backgroundColor: 'white',
  },
  modalBody: {
    padding: 16,
    position: 'relative',
    '&:after': {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: "' '",
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderTopColor: '#fff',
      borderWidth: 20,
      marginLeft: -20,
    },
    '& p': {
      fontSize: 16,
      margin: 0,
      marginBottom: 5,
    },
  },
  note:{
    color: 'rgb(14, 78, 102)',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 12,
    float: 'left',
    textTransform: 'uppercase',
  },
  modalHeader: {
    marginBottom: 20,
  },
  options: {
    backgroundColor: 'rgba(250, 220, 0, 0.4)',
    textAlign: 'right',
    padding: '10px 16px',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 12,
  },
  modalTitle: {
    color: 'rgb(14, 78, 102)',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 18,
    margin: 0,
  },
  summary: {
    fontFamily: 'HelveticaNeueBold',
  },
}));

export default useStyles;
