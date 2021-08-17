import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: '20px',
    display: 'flex',
    padding: '16px',
    marginTop: '1rem',
    marginBottom: '2px',
  },
  pagination: {
    borderRadius: 4, 
    padding: '16px',
    
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  searchButton: {
    color: '#6a1b9a',
  },
  form: {
    marginTop: '1rem',
  },
  
}));