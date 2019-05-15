export const people = [
  {
    id: 1,
    title: "דאינריז"
  },
  {
    id: 2,
    title: "אריה"
  },
  {
    id: 3,
    title: "ג׳ון"
  },
  {
    id: 4,
    title: "סרסיי"
  },
  {
    id: 5,
    title: "טיריון"
  },
  {
    id: 6,
    title: "סאנסה"
  },
  {
    id: 7,
    title: "ג׳יימי"
  },
  {
    id: 8,
    title: "בראן"
  },
  {
    id: 9,
    title: "בריאן"
  },
  {
    id: 10,
    title: "ג׳נדרי"
  },
  {
    id: 11,
    title: "ברון"
  },
  {
    id: 12,
    title: "טורמונד"
  },
  {
    id: 13,
    title: "גילי"
  },
  {
    id: 14,
    title: "תולע אפור"
  },
  {
    id: 15,
    title: "יורון"
  },
  {
    id: 16,
    title: "סאם"
  },
  {
    id: 17,
    title: "דאבוס"
  },
  {
    id: 18,
    title: "יארה"
  },
  {
    id: 20,
    title: "דרוגון"
  }
];

export const allPeople = people.reduce((output, person) => {
  output[person.id] = true;
  return output;
}, {});

export default people;
