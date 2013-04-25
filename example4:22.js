var Animal = function(attr){
	this.attributes = attr
}

var sadie = new Animal({name:"sadie", species: "dog"})
var dumbo = new Animal({name:"dumbo", species: "dog"})


// prototyle effect all instances of an objest, so this makes every animal 8 year old
Animal.prototype.age = 8

String.prototype.sayHey = function () {console.log "hey"}
"mason".sayHey() 




var Human = function() {this.alive = true}
mason = new Human()

Human.prototype.legs = 2
// now when you do 
// mason
// it returns
// Human {alive: true, legs: 2}

mason.prototype()  
// returns undefined because mason isnt a constructor, 
// its an instance so it cant be prototypes



// new stuff

var Animal = function() { this.breath = function() { return "i'm breathing"}}
var Dog = function() { this.sniff = function(){ return "sniff sniff"}}

croc = new Animal ()
// returns animal {breath:function}
croc.breath()
// returns "im breathing"

// try to make sadie a dog and an animal
// one way is drop all the animal stuff into th dog function

var dog = function(){
	var dog = new Animal();
	dog.sniff = function() { return "sniff sniff"};
	return dog;
}

sadie = new Dog()
// returns animal {breath: fucntion, sniff: function}
// so now sadie is both dog and animal.  we constructed a new animal and changed the return from
// the default to the new 
