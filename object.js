'use strict';

var school = {
	name: 'Hogwarts School of Witchcraft and Wizardry',
	students : ['Harry', 'Ron', 'Hermione'],
	accept: function(name) { return name; }
};

console.log(school);
console.log(school.accept("Ginny"));

function constructSchool(name, number) {
	this.name = name;
	this.numberOfStudents = number;
}

var newSchool = new constructSchool('Magical School', 100);

console.log(newSchool);