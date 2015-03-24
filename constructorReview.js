//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function (object) {
  this.species = object.species;
  this.name = object.name;
  this.legs = object.legs;
  this.color = object.color;

  if (Object.prototype.toString.call(object.food) === Object.prototype.toString.call([]) || object.food === undefined) {
    this.food = object.food;
  } else {
    throw new Error('object.food not an array');
  }
};

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
var person = function (name, age, height, gender) {
  return {
    name: name,
    age: age,
    height: height,
    gender: gender
  };
};

//Create a animal array and a person array.

  //code here
var animals = [];
var people = [];

//Create two instances of Animal and push those into your animal array

  //code here
animals.push(new Animal({
    species: 'Dog',
    name: 'Fred',
    legs: 4,
    color: 'black',
    food: ['cats']
  }));

animals.push(new Animal({
    species: 'Cat',
    name: 'Pepper',
    legs: 4,
    color: 'green',
    food: ['Dogs named Fred', 'Cats named Phil']
  }));

//Create two instances of person and push those into your person array.

  //code here
people.push({
    name: 'Jan',
    age: 30,
    height: 60,
    gender: 'Female'
  });

people.push({
    name: 'Jack',
    age: 28,
    height: 10,
    gender: 'Male'
  });

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function () {
    var i = Math.floor(Math.random() * this.food.length);
    console.log('%s ate %s', this.name, this.food[i]);
  };

animals.forEach(function (current) {
    current.eat();
  });

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
// We could, but only by adding it manually to each one or by adding it to Object.prototype - but the first option is unweildy and the second is bad practice because then every object will have access to that method. 

/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  It creates a new object, sets that object's prototype property to be the constructor function's prototype object, uses that object whenever `this` is mentioned, and then returns the newly created object, unless a non primitive type is returned by the function. In that case, that value is returned instead.

  2) What's a good way to describe the keyword 'this'
  Inside a method, it is the object the method is called on. In strict mode, it retains the value it had before entring the execution context. Outside of any context or strict mode, it refers to the global window object. 

  3) Can a normal function which creates an object and then returns that object use the prototype?
  Not without manually setting the prototype

  4) What happens if you forget to use 'new' when calling a constructor?
  The properties assigned to this are assigned to the global window object
*/
