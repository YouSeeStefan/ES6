function Animal(name) {
    this.name = name;
    this.aLife = true;
}
Animal.prototype.eat = function() {
    console.log(this.name + ': Crunch, Crunch...');
};

function Dog(name) {
    // Without call to super
    this.name = name;
}

function Cat(name) {
    // Call super constructor
    // Call gives also the properties of the super
    Animal.call(this, name);
}

// Create a reference for the prototype
// Reference with create new object
Dog.prototype = Object.create(new Animal());

// Reference with create prototype
Cat.prototype = Object.create(Animal.prototype);
// And create a reference for the constructor
Cat.prototype.constructor = Animal;

// A new method for Dog, also in the prototype
Dog.prototype.bark = function() {
    console.log(this.name + ': Woohoohoo!');
};

let dog = new Dog('Yoda');
dog.bark();
dog.eat();


console.log('Is dog an instance of dog?', dog instanceof Dog);
console.log('Is dog   an instance of Animal?', dog instanceof Animal);

console.log(dog);
console.log(new Animal('Tarzan'));

let cat = new Cat('Garfield');
console.log(cat);
