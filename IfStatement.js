// if(something){
//   do something
// } else {
//   do something else
// }

 const id = 100;

// equal to 
// if (id == 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // not equal

// if (id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // equal to value & type
// if (id === 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // equal to value & type
// if (id !== 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined 
// if (typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// // GREATER OR LESS THAN

// if(id >= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCRRECT');
// }

const color = 'red';

if (color === 'red'){
  console.log('color is red');
} else if(color == 'blue'){
  console.log('color is blue');
} else {
  console.log('color is not red or blue');
}

// logical operators 
const name = 'Steve';
const age = 20;

// AND &&
if (age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
  console.log(`${name} is teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR || 
if(age <16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary operator

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without Braces
if (id === 100)
  console.log('CORRECT');
  else
  console.log('INCORRECT');

  if(id === 100)
  console.log('CORRECT');
  else 
  console.log('INCORRECT');