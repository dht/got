import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

import people from "../constants/people";

import { firebaseConfig } from "../constants/config";

const mainApp = firebase.initializeApp(firebaseConfig),
  games = mainApp.database().ref("games");

export const invert = ppl => {
  const ids = people.map(person => person.id);

  return ids.filter(id => {
    return !ppl[id];
  });
};

export const peopleToQuestions = ppl => {
  let id = 3;
  const scoring = "20 נקודות לניחוש נכון";

  return invert(ppl).map(key => {
    const person = people.filter(p => p.id == key)[0];

    const title = `מי יהרוג את ${person.title}?`;

    return {
      id: id++,
      title,
      scoring
    };
  });
};

export const peopleToAnswers = ppl => {
  let id = 3;

  return invert(ppl).map(key => {
    return {
      id: id++,
      people: {}
    };
  });
};

export const saveGuess = (answers, user) => {
  return games.push({ answers, ...user });
};
