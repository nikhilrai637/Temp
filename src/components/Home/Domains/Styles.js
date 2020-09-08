import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
    root: {
      minWidth: 185,
      borderRadius:"10%",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 0,
      paddingTop: '58.25%', // 16:9
    },
   

  });
  