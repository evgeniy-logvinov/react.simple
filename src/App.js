import React from "react";
import './App.css';
import MiniDrawer from './components/MiniDrawer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6a1b9a',
    },
    secondary: {
      main: '#fdd835',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MiniDrawer />
    </ThemeProvider>
  );
}

export default App;