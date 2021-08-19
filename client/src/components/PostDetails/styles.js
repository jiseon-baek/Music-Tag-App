import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '500px',
    height: '500px',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  linkButton: {
	fontWeight: 'bold',
  },
  recomPost: {
    border: '1px solid',
  },
  title: {
    fontSize: '18px',
    fontWeight: '100',
    fontFamily: 'Nanum Barun Gothic',
    fontStyle: 'normal'
  },
  name: {
    fontFamily: 'gill sans',
  },
  message: {
    fontWeight: 'lighter',
  },
  recomTypo: {
    fontFamily: 'gill sans'
  },
  [theme.breakpoints.down('sm')]: {
    media: {
      width: '320px',
      height: '320px',
      margin: '20px 0 30px'
    },
    recomTypo: {
      fontSize: '20px',
      fontWeight: 'bold'
    }

  }
}));