// function declaration

function greet(firstName, lastName){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  // console.log('hello');
  return 'hello' + firstName + ' ' + lastName;
}

 console.log('John', 'Smith');

// function expresions

const square = function(x = 3){
  return x*x;
};

console.log(square());

// immidialey invokable function expresions - IIFEs

(function(){
  console.log('IIFE Ran..');
})();

(function(name){
  console.log('Hello '+ name);
})('Brad');


// property methods

const todo = {
  add: function(){
    console.log('Add todo..');
  }, 
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo');
}

todo.add();
todo.edit(22);
todo.delete();