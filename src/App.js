import React from "react";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MiniDrawer from './components/MiniDrawer';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import './App.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MiniDrawer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;