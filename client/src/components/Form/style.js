import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1.5),
     
    },
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: 30,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    
  },
  buttonSubmit: {
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: '#512da8',
    color: 'white'
  },
  buttonClear: {
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: '#c2185b',
    color: 'white'
  },
  header: {
    fontWeight: 10,
    fontFamily: 'gill sans',
    color: '#242424'
  },
  typo: {
    fontFamily: 'gill sans',
    fontSize: 23,
    padding: 10,
  }
}));