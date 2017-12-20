// for loop 

for (let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;
  }
  if(i === 5){
    console.log('Stop the loop');
    break;
  }
  console.log('number '+ i);
}

// while loop

let i = 0;

while(i < 10){
  console.log('Number ' +i);
  i ++;
}

// do while

let i = 100;

do {
  console.log('number ' + i);
  i++;
}

while(i < 10);

// loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i ++){
//   console.log(cars[i]);
// }

// ForEach
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);

})

// Map

const users = [
  {id:1, name: 'John'},
  {id:2, name: 'Sara'},
  {id: 3, name: 'Karen'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
