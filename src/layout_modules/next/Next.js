// @flow
import React, { Component } from "react";
import "./Next.scss";
import contextTypes from "../contextTypes";

type Props = {};

export class Next<Props> extends Component {
  static defaultProps: Props = {};

  state = {};

  render() {
    return (
      <div className="Next-container">
        <button onClick={this.props.onPrevious}>שאלה קודמת</button>
        <button onClick={this.props.onNext}>שאלה הבאה</button>
      </div>
    );
  }
}

Next.contextTypes = contextTypes;

export default Next;
