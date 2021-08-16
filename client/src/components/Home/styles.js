import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 20,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    marginTop: '1rem',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  searchButton: {
    color: '#6a1b9a',
  }
}));