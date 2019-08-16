import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Topic from './Topic';

export default class Topics extends Component {
    render() {
        const { url, path } = this.props.match
        return (
            <div>
                <h2>Topics</h2>

                <ul>
                    <li>
                        <Link to={`${url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${path}/:id`} component={Topic} />
                <Route
                    exact
                    path={path}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        );
    }
}