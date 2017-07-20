function DigitalPal() {
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;

	//method feeds the digitalpal when hungry is true
	this.feed = function() {
		if(this.hungry === true) {
			console.log("That was yemmy!");
			this.hungry === false;
			this.sleepy === true;
		}else{
			console.log("No Thanks! I'm full.");
		};
	};

	//this method puts the digitalpal to sleep when sleepy is true
	this.sleep = function() {
		if(this.sleepy === true) {
			console.log("Zzzzzzzz");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge;
		}else{
			console.log("No way! I'm not tired.");
		};
	};

	//this method allows the digitalpal to play when they are bored
	this.play = function() {
		if(this.bored === true) {
			console.log("Yay! Let's play!");
			this.bored = false;
			this.hungry = true;	
		}else{
			console.log("Not right now. Later?");
		};
	};

	//this method is called in "this.sleep" to increase the age of the digitalpal by one
	this.increaseAge = function() {
		this.age++;
		console.log("Happy Birthday to me! I am " + this.age + " years old!");
	};

};

//creates an object to store the digitalpals
var animals = {};

//creates new digitalpal with the name of dog
animals.dog = new DigitalPal();

//adds new property for dog 
animals.dog.outside = false;

//creates function for dog bark
animals.dog.bark = function() {
  console.log("Woof! Woof!");
};

//adds the method "letOutside" to the "dog" object which lets "dog" outside when it is outside
animals.dog.letOutside = function() {
	if(!this.outside) {
		console.log("Yay! I love the outdoors!");
		this.outside = true;
		this.bark();
	}else {
		console.log("We're already outside though...");
	};
};

//adds the method "letinside" to the "dog" obeject which lets "dog" inside when it is outside
animals.dog.letInside = function() {
	if(this.outside) {
		console.log("Awwww... Do I have to?");
		this.outside = false;
	}else{
		console.log("We're already inside though...");
	};
};

//creates a new DigitalPal with the name "cat"
animals.cat = new DigitalPal();

//adds the property "houseQuality" to the "cat" object
animals.cat.houseQuality = 100;

//adds the "meow" method to the "cat" object
animals.cat.meow = function() {
	console.log("Meow! Meow!");
};

//adds the "destroyFurniture" method to the "cat" object which decreases the "animals.cat.housequality" value by ten
animals.cat.destroyFurniture = function() {
	if(this.houseQuality - 10 > 0) {
		this.houseQuality -= 10;
		this.bored -= false;
		this.sleepy = true;
		console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
	}else{
		console.log("I've already destroyed it all!");
	};
};

//adds the "butNewFurniture" method to the "cat" object which increases the "animals.cat.houseQuality" value by fifty
animals.cat.butNewFurniture = function(){
	this.houseQuality += 50;
	console.log("Are you sure that's a good idea?");
};

// Grabbing command line arguments for animal and method
var animal = process.argv[2];
var method = process.argv[3];

// try calling your chosen animal and method from the terminal example: 'node tamagotchi-this dog letInside'
animals[animal][method]();