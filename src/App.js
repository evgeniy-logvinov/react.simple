import React from "react";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import './App.css';
import history from "./router/history";

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
        <Router history={history}>
          <MainPage />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;