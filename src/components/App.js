import React from "react";
import logo from "./logo.png";
import "./App.scss";
import Question from "../layout_modules/question/Question";
import questions from "../constants/questions";
import Screens from "../layout_modules/screens/Screens";
import { peopleToQuestions, peopleToAnswers } from "../utils/utils";
import clone from "clone";
import Form from "../layout_modules/form/Form";
// import { allPeople } from "../constants/people";

const width = window.innerWidth;

export class App extends React.Component {
  state = {
    questions: clone(questions),
    answers: [
      {
        id: 1,
        people: {}
      },
      {
        id: 2,
        people: {}
      }
    ]
  };

  get question() {
    const { questions } = this.state;
    const index = this.index;

    return questions[index];
  }

  get answer() {
    const { answers } = this.state;
    const index = this.index;

    return answers[index];
  }

  set index(value) {
    this.props.history.push(`/${value}`);
  }

  get index() {
    const { match } = this.props,
      { params } = match || {},
      { stage } = params || {};

    return stage || -1;
  }

  renderStart() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>חידון משחקי הכס</h2>
        <p>נחש/י מה יקרה בפרק הבא</p>
        <button onClick={() => (this.index = 0)}>התחלת המשחק</button>
      </div>
    );
  }

  renderEnd() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>הניחוש נשמר!</h2>
        <p>תשובות אחרי הפרק הבא</p>
      </div>
    );
  }

  renderForm() {
    const { answers } = this.state;

    return (
      <div>
        <Form answers={answers} onNext={this.next} />
      </div>
    );
  }

  onChange = person => {
    const { answers } = this.state,
      { isMultiple } = this.question;

    const index = this.index;

    const value = !person.selected;

    if (isMultiple) {
      answers[index].people[person.id] = value;
    } else {
      answers[index].people = { [person.id]: value };
    }

    this.setState({ answers });
  };

  generateExtraQuestions = () => {
    let { questions, answers } = this.state,
      answer = answers[1],
      people = answer.people;

    // clear
    questions.splice(2);
    answers.splice(2);

    const extraQuestions = peopleToQuestions(people);
    const extraAnswers = peopleToAnswers(people);

    questions = [...questions, ...extraQuestions];
    answers = [...answers, ...extraAnswers];

    this.setState({ questions, answers });
  };

  next = () => {
    let index = this.index;
    index++;

    if (index === 2) {
      this.generateExtraQuestions();
    }

    this.index = index;
  };

  previous = () => {
    let index = this.index;
    index--;
    this.index = index;
  };

  style = i => {
    return {
      width,
      right: i * width
    };
  };

  renderQuestion(i) {
    const { questions, answers } = this.state;
    const index = this.index;

    const question = questions[i];
    const answer = answers[i];

    return (
      <div key={i}>
        <Question
          question={question}
          answer={answer}
          onChange={this.onChange}
          onNext={this.next}
          onPrevious={this.previous}
        />
      </div>
    );
  }

  renderQuestions() {
    const { questions } = this.state;

    return questions.map((question, i) => this.renderQuestion(i));
  }

  render() {
    const index = this.index;

    const screens = [
      this.renderStart(),
      ...this.renderQuestions(),
      this.renderForm(),
      this.renderEnd()
    ];

    return (
      <div className="App">
        <Screens index={index} screens={screens} />
      </div>
    );
  }
}

export default App;
