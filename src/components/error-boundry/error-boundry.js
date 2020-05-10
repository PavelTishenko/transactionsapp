import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    }
    render() {
        if (this.state.hasError === true) {
            return (
                <span>We have some problems...</span>
            )
        } else {
            return this.props.children;
        };
    };
};