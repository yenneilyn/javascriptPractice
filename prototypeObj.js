// constructor
var Animal = function(kind) {
  this.kind = kind;
}

var charlie = new Animal('dog');
var frobert = new Animal('cat');

console.log(charlie.kind); // 'dog'
console.log(frobert.kind); // 'cat'

console.log(frobert.lifespan); //undefined


Animal.prototype.lifeSpan = 15;

console.log(charlie.lifeSpan); //15

// inheritance 
console.log(frobert.lifeSpan); //15

// putting charlie on pet's inheritance chain
var pet = Object.create(charlie);
console.log(pet.kind); //'dog'

//Javascript makes no distinction between constructors and other functions
// therefore every functions gets a prototype property
//Anything that is not a function does not have prototype property

// regular function has a prototype property 
var myFunction = function () { return "Hello";}
console.log(myFunction.prototype); // [object Object]

// a constructor has a prototype too
console.log(Animal.prototype);  // [object Object]

var Person = {
  name: "Jan"
}

console.log(Person.prototype); //undefined






