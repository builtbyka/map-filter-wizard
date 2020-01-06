import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wizardWrap: {
    height: 'calc(100vh - 72px)',
    position: 'relative',
    boxShadow: '2px 0px 6px 0px rgba(0, 0, 0, 0.2)',
    zIndex: 2,
  },
  wizardScroll: {
    height: 'calc(100vh - 72px - 80px)',
    overflowY: 'auto',
  },
  wizard: {
    margin: '0 auto',
    maxWidth: 480,
    padding: '10% 20px',
  },
}));

export default useStyles;
