import React, { Component } from "react";
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit test <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                    <Button variant="contained" color="secondary">
                        Hello World
                    </Button>
                </header>
            </div>
        )
    }
}
