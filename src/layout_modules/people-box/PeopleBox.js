// @flow
import React, { Component } from "react";
import "./PeopleBox.scss";
import contextTypes from "../contextTypes";
import Avatar from "../avatar/Avatar";
import people from "../../constants/people";

type Props = {};

export class PeopleBox<Props> extends Component {
  static defaultProps: Props = {};

  state = {};

  get people() {
    const { values } = this.props;

    return people.map(person => {
      return {
        ...person,
        selected: values[person.id]
      };
    });
  }

  render() {
    return (
      <div className="PeopleBox-container">
        {this.people.map(person => (
          <Avatar
            onClick={this.props.onClick}
            person={person}
            key={person.id}
          />
        ))}
      </div>
    );
  }
}

PeopleBox.contextTypes = contextTypes;

export default PeopleBox;
