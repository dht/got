// @flow
import React, { Component } from "react";
import "./Form.scss";
import contextTypes from "../contextTypes";
import { saveGuess } from "../../utils/utils";

type Props = {};

export class Form<Props> extends Component {
  static defaultProps: Props = {};

  state = {
    name: "",
    nickname: ""
  };

  save = () => {
    const { answers } = this.props;
    const { name, nickname } = this.state;

    saveGuess(answers, { name, nickname }).then(res => {
      this.props.onNext();
    });
  };

  onChange = ev => {
    const name = ev.target.name,
      value = ev.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { name, nickname } = this.state;

    return (
      <div className="Form-container">
        <h1>מילאת הכל!</h1>
        <input
          value={name}
          name="name"
          onChange={this.onChange}
          placeholder="שם פרטי"
        />
        <input
          value={nickname}
          name="nickname"
          onChange={this.onChange}
          placeholder="כינוי"
        />
        <button onClick={this.save}>שליחת הניחוש</button>
      </div>
    );
  }
}

Form.contextTypes = contextTypes;

export default Form;
