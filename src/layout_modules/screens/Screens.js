// @flow
import React, { Component } from "react";
import "./Screens.scss";
import contextTypes from "../contextTypes";

type Props = {};

const width = window.innerWidth;

export class Screens<Props> extends Component {
  static defaultProps: Props = {};

  state = {};

  style = i => {
    const { index } = this.props;

    return {
      right: (i - index - 1) * width,
      width
    };
  };

  render() {
    return (
      <div className="Screens-container">
        {this.props.screens.map((screen, i) => (
          <div className="screen" style={this.style(i)} key={i}>
            {screen}
          </div>
        ))}
      </div>
    );
  }
}

Screens.contextTypes = contextTypes;

export default Screens;
