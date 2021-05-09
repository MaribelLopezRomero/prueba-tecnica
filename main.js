//Ejercicio 1

const arrayNumber = [
  1,
  4,
  5,
  7,
  3,
  6,
  7,
  3,
  4,
  5,
  8,
  9,
  87,
  5,
  45,
  34,
  23,
  32,
  6,
  7,
  87,
  56,
  87,
  1,
];

function maxMin() {
  const maxValor = Math.max.apply(null, arrayNumber);
  const minValor = Math.min.apply(null, arrayNumber);

  return `El numero mas alto es ${maxValor}, el numero mas bajo es ${minValor}, `;
}

// console.log(maxMin());

function medium() {
  let total = 0;
  for (let i of arrayNumber) total += i;
  const result = total / arrayNumber.length;
  return `La media es ${result}`;
}

// console.log(medium());

function highNumberRepeat() {
  const max = Math.max(...arrayNumber);
  let frequency = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] === max) {
      frequency++;
    }
  }
  return `El valor mas alto esta repetido ${frequency} veces`;
}
// console.log(highNumberRepeat());

function valoresEstadisticos() {
  console.log(maxMin());
  console.log(medium());
  console.log(highNumberRepeat());
}
valoresEstadisticos();
