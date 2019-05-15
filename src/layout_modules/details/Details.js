
// @flow
import React, { Component } from "react";
import "./Details.scss";
import contextTypes from "../contextTypes";

type Props = {};

export class Details<Props> extends Component {
    static defaultProps: Props = {};

    state = {};

    render() {
        return (
            <div className="Details-container">
            Details
            </div>
        );
    }
}

Details.contextTypes = contextTypes;

export default Details;
