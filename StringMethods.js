// String methods
const firstName = 'Mohamed';
const lastName = 'G';
const age = 30;
const str = 'Hello there my name is Mohamed';
const tags = 'web design, web development,programming';

let val; 

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad';
val += ' Trav';

val = 'Hello, my name is ' + firstName + ' ' + 'and I am' + age;

// escaping
val = 'that\'s awesome, I can\'t wait';

//lenght
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

// change case 
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//indexof()
val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

// chartAt()
val = firstName.charAt('2');

// get last char
val = firstName.charAt(firstName.length - 1);

//substring
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Mohamed', 'G');

console.log(val);
