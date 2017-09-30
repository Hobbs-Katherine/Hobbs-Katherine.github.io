/////Parent Object - Pet
function Pet(name, breed, petType, age) {
    this.name = name;
    this.breed = breed;
    this.petType = petType;
    this.age = age;
    this.info = function() { 
       return this.name + " is a "+ this.breed + " which is a type of " + this.petType + ". " + this.name + " is " + this.age + ".";
    };
};

//Pet.prototype.info = function() { Text(this.name + " is a " + this.breed + " which is a type of " + this.petType ". " + this.name " is " this.age); };

/////Child Object - Dog
function Dog(name, breed, petType, age, numLegs) {
    Pet.call(this, name, breed, petType, age);
    this.numLegs = numLegs;
    this.info = function() { 
       return this.name + " is a "+ this.breed + " which is a type of " + this.petType + ". " + this.name + " is " + this.age + ". " + this.name + " has " + this.numLegs + " legs.";
    };
};
Dog.prototype = Object.create(Pet.prototype);

/////Child Object - Cat
function Cat(name, breed, petType, age, numLegs) {
     Pet.call(this, name, breed, petType, age);
    this.numLegs = numLegs;
    this.getLegs = function() {
        return this.name + " has " + this.numLegs + " legs.";
    };
};

Cat.prototype = Object.create(Pet.prototype);

/////Child Object - Bird
function Bird(name, breed, petType, age, numLegs){
     Pet.call(this, name, breed, petType, age);
};

Bird.prototype = Object.create(Pet.prototype);

/////Child Object - Fish
function Fish(name, breed, petType, age)
{
    Pet.call(this, name, breed, petType, age);
    this.swim = function() {
        return " " + this.name + " says, " + "\"Just keep swiming, swiming, swiming.\"";
    }
};

Fish.prototype = Object.create(Pet.prototype);

/////other functions
function pickPet(pet) {
    var name, breed, petType, age, info;
    petType = pet.value;
    name = prompt("You've select a " + petType + ".\n What name do you want to give them?", "Milo");
    age = prompt("How old do you want your " + petType + " to be?", "3 months");
    switch(petType) {
        case 'dog':
            breed = prompt("Dogs come in all shapes and sizes.\n What breed do you want to have?", "Lab" );
            var dog = new Dog(name, breed, petType, age, 4);
            info = dog.info();
            break;
        case 'cat':
            breed = prompt("Cats come in all shapes and sizes.\n What breed do you want to have?", "Tabby");
            var cat = new Cat(name, breed, petType, age, 4);
            info = cat.info() + cat.getLegs();
             break;
        case 'bird':
            breed = prompt("Birds come in all shapes and sizes.\n What breed do you want to have?", "Parrot");
            var bird = new Bird(name, breed, petType, age);
            bird.numLegs = 2;
            bird.info = function() {
                return this.name + " is a "+ this.breed + " which is a type of " + this.petType + ". " + this.name + " is " + this.age + ". " + this.name + " has " + this.numLegs + " legs.";
            };
            info = bird.info();
             break;
        case 'fish':
            breed = prompt("Fish come in all shapes and sizes.\n What breed do you want to have?", "Beta");
            var fish = new Fish(name, breed, petType, age);
            info = fish.info();
            info += fish.swim();
             break;
        default:
            info = "Sorry and error occured";
             break;
    }
    document.querySelector("#petInfo").innerHTML += "<li>" + info + "</li>";
    document.querySelector("div > h3").style.visibility = "visible";
}