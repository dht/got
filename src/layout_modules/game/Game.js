// @flow
import React, { Component } from "react";
import "./Game.scss";
import contextTypes from "../contextTypes";
import Avatar from "../avatar/Avatar";
import { invert } from "../../utils/utils";

type Props = {};

export class Game<Props> extends Component {
  static defaultProps: Props = {};

  state = {};

  get answers() {
    const { game } = this.props,
      { answers } = game;

    return answers;
  }

  getAnswerPerson = id => {
    const answer = this.answers[id + 2],
      { people } = answer || {};

    const person = Object.keys(people || {}).filter(id => people[id])[0];

    return person;
  };

  renderCasualties = () => {
    const answer = this.answers[1];
    let { people } = answer || {};

    people = invert(people);

    return (
      <div className="answer" key={answer.id}>
        <div className="title">מי לא ישרוד?</div>
        <div className="people">
          {people.map((id, index) => {
            const corner = this.getAnswerPerson(index);
            return <Avatar key={id} person={{ id }} corner={corner} />;
          })}
        </div>
      </div>
    );
  };

  renderRules = () => {
    const answer = this.answers[0];
    const { id, people } = answer;

    const person = Object.keys(people).filter(id => people[id])[0];

    return (
      <div className="answer" key={id}>
        <div className="title">מי ימלוך?</div>
        <Avatar key={1} person={{ id: person }} />
      </div>
    );
  };

  render() {
    const { game } = this.props,
      { nickname, name, score } = game;

    return (
      <div className="Game-container">
        <div className="name">
          {nickname || name}
          <div> ({score} נקודות)</div>
        </div>
        {this.renderRules()}
        {this.renderCasualties()}
      </div>
    );
  }
}

Game.contextTypes = contextTypes;

export default Game;
