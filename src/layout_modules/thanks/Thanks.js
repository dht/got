
// @flow
import React, { Component } from "react";
import "./Thanks.scss";
import contextTypes from "../contextTypes";

type Props = {};

export class Thanks<Props> extends Component {
    static defaultProps: Props = {};

    state = {};

    render() {
        return (
            <div className="Thanks-container">
            Thanks
            </div>
        );
    }
}

Thanks.contextTypes = contextTypes;

export default Thanks;
