// Imports
import React from 'react';
import './App.css';
import MetronomeWrapper from './containers/MetronomeWrapper';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

// Material styling

// Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles({
  root: {
    margin: '10px 0 0 0',
    width: '100%'
  }
});

// Build Component - App
export default function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Metronomical</h1>
        <MetronomeWrapper classes={classes} />
      </div>
    </ThemeProvider>
  );
}