'use strict';

//object literal
var school = {
	name: 'Hogwarts School of Witchcraft and Wizardry',
	students : ['Harry', 'Ron', 'Hermione'], //array
	accept: function(name) { return name; } //function
};

console.log(school);
console.log(school.accept("Ginny"));

// different ways of accessing the property's value
console.log(school.students); // ['Harry', 'Ron', 'Hermione']
console.log(school["students"]);

//accessing an element in the array
console.log(school.students[0]); // 'Harry'

school.students.push("Fred");
console.log(school.students.length); //4

var student = school.students.pop();
console.log(student); // 'Fred'

var myFunction = function () { return "Hello!"; };

//array can contain different types of data
school.students.push(1); 
school.students.push(false);
school.students.push(undefined);
school.students.push(null);
school.students.push([]);
school.students.push({});
school.students.push(myFunction);


var myNewFunction = school.accept;
 var newName = myNewFunction("George");
 
 console.log(newName); //George


function constructSchool(name, number) {
	this.name = name;
	this.numberOfStudents = number;
}

var newSchool = new constructSchool('Magical School', 100);
var newCollege = new constrictScool('Magical College', 1000);

console.log(newSchool); 

newSchool.newString = 'string';
console.log(newSchool.newString); // 'string'
console.log(newCollage.newString);  //undefined


function hello(name) {
	this.sayHello = function() {
		return 'Hello ' + name; 
	}
}

var helloMe = new hello('Jen');
var helloYou = new hello('Jon');

console.log(helloMe.sayHello()); // Hello Jen
console.log(helloYou.sayHello()); // Hello Jon



