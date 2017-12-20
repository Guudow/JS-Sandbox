const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'Steve@aol.com',
  hobbies: ['music', 'sport'],
  address: {
    city: 'Miami',
    State: 'FL'
  },
  getBirtYear: function(){
    return 2017 - this.age;
  }

}

let val;

val = person;
// get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.State;
val = person.address['city'];
val = person.getBirtYear();

console.log(val);

const people = [
  {name: 'MOhamed', age: 30},
  {name: 'Mike', age: 33},
  {name: 'John', age: 22}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}