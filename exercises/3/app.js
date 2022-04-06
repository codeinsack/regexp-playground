/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

const $phoneNumber = document.querySelector("#phone");

const pattern = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g;

$phoneNumber.addEventListener("input", function (event) {
  if (event.target.value.match(pattern)) {
    this.classList.add("green");
  } else {
    this.classList.remove("green");
  }
});
