// @flow
import React, { Component } from "react";
import "./Avatar.scss";
import contextTypes from "../contextTypes";
import classnames from "classnames";

type Props = {};

export class Avatar<Props> extends Component {
  static defaultProps: Props = {};

  state = {};

  get id() {
    const { person } = this.props,
      { id } = person;

    return id;
  }

  style = id => {
    return {
      backgroundImage: `url(/images/p${id}.jpg)`
    };
  };

  onClick = () => {
    const { person } = this.props;

    this.props.onClick(person);
  };

  renderCorner() {
    const { corner } = this.props;

    if (!corner) return null;

    return <div className={"corner"} style={this.style(corner)} />;
  }

  render() {
    const { person } = this.props;

    const className = classnames("Avatar-container", {
      on: person.selected
    });

    return (
      <div
        className={className}
        onClick={this.onClick}
        style={this.style(this.id)}
      >
        <i className="material-icons">done</i>

        {this.renderCorner()}
      </div>
    );
  }
}

Avatar.contextTypes = contextTypes;

export default Avatar;
