import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: 30,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: '#c2185b',
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#4a148c',
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  authButton: {
    backgroundColor: '#f8f8fc',
    color: '#242424'
  },
  kakaoBtn: {
    backgroundColor: '#f9e000',
    width: '100%',
    height: '100%',
  }
  
}));
