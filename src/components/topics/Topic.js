import React, { Component } from "react";

export default class Topic extends Component {
    render() {
        const { params } = this.props.match
        return <h3>Requested Param: {params.id}</h3>;
    }
}