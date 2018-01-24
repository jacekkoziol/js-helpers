document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  generateTableResult(COLUMNS_NUMBER);
});

const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17];
const COLUMNS_NUMBER = 5;

function generateTableResult(columnsNumber) {
  const minNumber = 1;
  const maxNumber = Math.max.apply(null, PRIME_NUMBERS);
  let arr = new Array(maxNumber).fill('-');

  console.log('>>>', maxNumber, arr, arr.length);
  // let arrAll = arr.map((el, i) => { return el});


  let arrAll = arr.map((el, i) => {
    if (PRIME_NUMBERS.indexOf(i+1) != -1) {
      return i+1
    } else {
      return '*'
    }
  });

  console.log(arrAll);
}