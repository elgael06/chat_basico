import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const {ui} = useSelector(state=>state);
  const classes = useStyles();

  return (<Fragment>
      <Routes />
      <Backdrop className={classes.backdrop} open={ui.loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
  </Fragment>
  );
}

export default App;
