// @flow
import React, { Component } from "react";
import "./Avatar.scss";
import contextTypes from "../contextTypes";
import classnames from "classnames";

type Props = {};

export class Avatar<Props> extends Component {
  static defaultProps: Props = {};

  state = {};

  style = () => {
    const { person } = this.props,
      { id } = person;

    return {
      backgroundImage: `url(/images/p${id}.jpg)`
    };
  };

  onClick = () => {
    const { person } = this.props;

    this.props.onClick(person);
  };

  render() {
    const { person } = this.props;

    const className = classnames("Avatar-container", {
      on: person.selected
    });

    return (
      <div className={className} onClick={this.onClick} style={this.style()}>
        <i className="material-icons">done</i>
      </div>
    );
  }
}

Avatar.contextTypes = contextTypes;

export default Avatar;
