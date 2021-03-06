import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backgroundBlendMode: 'darken',
    cursor: 'pointer'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  container: {
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      display: 'flex',
      justifyContent: 'center',

    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key

      width: '90vw',

      boxSizing: 'border-box',

    }
  },
  cards: {
    transition: 'all 150ms ease-in',
    cursor: 'pointer',
    "&:hover": {
      transform: 'scale(1.03)',
    }
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',

  },
  title: {
    padding: '0 16px',
    fontFamily: 'gill sans',
    fontSize: '24px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});