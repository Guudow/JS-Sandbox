const numbers = [43,56,55,55,43,21,33,4];
const numbers2 = new Array(22,45,33,76,56);
const fruit = ['Apple', 'Banana', 'Orange'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get aaray length
val = numbers.length;
// Check if is aaray
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(55);

// //MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// //Add on to front
// numbers.unshift(120);
// //Take off from end
// numbers.pop();
// //Take of from front
// numbers.shift();
// // Splice values
// numbers.splice(1,1);
// //Reverse
// numbers.reverse();

//Concatenate
val = numbers.concat(numbers2);

// sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "campare function"
val = numbers.sort(function(x, y){
   return y - x;
});

// Reverse sort 
val = numbers.sort(function(x, y){
  return y - x;
});

//find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);

