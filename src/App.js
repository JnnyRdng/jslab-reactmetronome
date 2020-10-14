// Imports
import React from 'react';
import './App.css';
import MetronomeWrapper from './containers/MetronomeWrapper';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';

// Material styling

// Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[600],
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