import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  view: {
    backgroundColor: 'white',
    '&:first-of-type': {
      paddingLeft: 15,
      borderRadius: '20px 0px 0px 20px',
    },
    '&:last-of-type': {
      paddingRight: 15,
      borderRadius: '0px 20px 20px 0px',
    },
    '&.active, &:hover': {
      backgroundColor: '#009ddc',
      color: 'white',
    },
  },
  email: {
    background: 'rgb(0, 175, 240)',
    borderRadius: 8,
    height: 48,
    color: '#fff',
    '&:hover': {
      color: '#000',
    },
    '& a': {
      color: 'white',
    },
  },
  details: {
    background: 'rgb(0, 175, 240)',
    borderRadius: 8,
    width: '100%',
    color: '#fff',
    margin: '10px 0',
    '&:hover': {
      color: '#000',
    },
    '& a': {
      color: 'white',
    },
    '& .MuiSvgIcon-root': {
      paddingLeft: 10,
    },
  },
  back: {
    '& .MuiButton-label': {
      justifyContent: 'flex-start',
      paddingLeft: '76px',
    },
    '& svg': {
      position: 'absolute',
      left: 16,
      color: 'white',
      backgroundColor: '#00aff0',
      borderRadius: '4px',
      padding: '10px 6px 10px 14px',
      margin: '0',
      boxSizing: 'content-box',
    },
  },
  backTo: {
    margin: 32,
    color: '#009ddc',
  },
  next: {
    '&.filled': {
      '& .MuiButton-label': {
        background: '#00aff0',
        color: 'white',
        borderRadius: '4px',
      },
      '&.Mui-disabled': {
        '& .MuiButton-label': {
          background: 'rgb(205, 217, 236)',
        },
      },
    },
    '& .MuiButton-label': {
      justifyContent: 'flex-end',
      paddingRight: '76px',
    },
    '& svg': {
      position: 'absolute',
      right: 16,
      color: 'white',
      backgroundColor: '#00aff0',
      borderRadius: '4px',
      padding: 10,
      margin: '0',
      boxSizing: 'content-box',
    },
    '&.Mui-disabled': {
      '& svg': {
        backgroundColor: 'rgb(205, 217, 236)',
      },
    },
  },
  skip: {
    color: '#8b9fb1',
  },
  navButtons: {
    height: '100%',
    lineHeight: '60px',
    width: '100%',
  },
  icon: {
    marginLeft: 5,
    lineHeight: '10px',
  },
}));

export default useStyles;
