// @flow
import React, { Component } from "react";
import "./Question.scss";
import contextTypes from "../contextTypes";
import PeopleBox from "../people-box/PeopleBox";
import Next from "../next/Next";

type Props = {};

export class Question<Props> extends Component {
  static defaultProps: Props = {};

  state = {};

  render() {
    const { question, answer } = this.props,
      { title, scoring } = question,
      { people } = answer;

    return (
      <div className="Question-container">
        <div className="title">{title}</div>
        <div className="scoring">{scoring}</div>
        <PeopleBox values={people} onClick={this.props.onChange} />
        <Next onNext={this.props.onNext} onPrevious={this.props.onPrevious} />
      </div>
    );
  }
}

Question.contextTypes = contextTypes;

export default Question;
