/*
  Iterate through the data provided. Use a regular expression to store the names in a new array
  but change the order of the name so first name is listed first and last name is last.
*/

let data = [
  "Jensen, Dale",
  "Smith, Andrea",
  "Jorgensen, Michael",
  "Vasefi, Annika",
  "Lopez, Monica",
  "Crockett, Steven",
];

const names = data.map((name) => {
  const regExp = /(\w+), (\w+)/;
  const [, lastName, firstName] = regExp.exec(name);
  return `${firstName}, ${lastName}`;
});

console.log("names", names);
