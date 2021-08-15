import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 50,
		margin: '50px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
        	padding: '20px 50px'
	      },
  heading: {
        color: '#242424',
        fontWeight: 2,
	fontSize: '55px',
	fontFamily: 'Gill Sans',
	textDecoration: 'none'
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'system-ui',
    color: '#364247'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: 10,
  },
  signInTypo: {
    backgroundColor: '#4a148c'
    },
  profile1: {
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
		appBar: {
			padding: 20,
		},
    heading: {
      fontSize: 30,
      marginLeft: 10,
    },
    image: {
      width: 45,
      height: 45,
      marginLeft: 5,
    },
    brandContainer: {
      width: '100%',
    },
    profile: {
      width:'90%',
    },
    logout: {
      marginLeft: 10,
      height: 60,
    },
    userName: {
      fontSize: 18,
    },
    profile1: {
      alignItems: 'center',
    },
  }
}));
