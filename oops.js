//-----object--------------

// var person = new Object();
// person.setValues = function(n,a){

//         this.name = n;
//         this.age = a ;

// };

// person.getValues = function(){
//     console.log("name is" +this.name);
//     console.log("Age is" +this.age)
// };

// person.setValues("rahul", 28);
// person.getValues();


// function person(First_name, LastName){
//     this.First_name = First_name;
//     this.LastName = LastName;
// }

// person.prototype.getdetails = function(){

//     console.log("name of the person" +this.First_name +this.LastName)
// }

// //------creating new instance of perosn object---

// let person1 = new person("mukul", "laltielm");
// let perosn2 = new person('RAhul','avbatshi');

// person1.getdetails();
// perosn2.getdetails();

// Object.create() example a 
// simple object with some properties 
// var coder = { 
//     isStudying : false, 
//     printIntroduction : function(){ 
//         console.log(`My name is ${this.name}. Am I  
//           studying?: ${this.isStudying}.`) 
//     } 
// } 
// // Object.create() method 
// var m1 = Object.create(coder); 
// var m2 = Object.create(coder);
// var m3 = Object.create(coder);
// var m4 = Object.create(coder);
  
// // "name" is a property set on "me", but not on "coder" 
// m1.name = 'Mukul';  
// m2.name = "Rahul";
// m3.name = 'akhil';
// m4.name = 'jaison';
  
// // Inherited properties can be overwritten 
// m1.isStudying = 'True';  
// m2.isStudying = 'False';
// m3.isStudying = 'true';
// m4.isStudying = 'true';
  
// m1.printIntroduction();
// m2.printIntroduction();
// m3.printIntroduction();
// m4.printIntroduction();


// Defining class using es6 
// class Vehicle { 
//     constructor(name, maker, engine) { 
//         this.name = name; 
//         this.maker = maker; 
//         this.engine = engine; 
//     } 
//     getDetails(){ 
//         return (`The name of the bike is ${this.name}.`) 
//         return (`The maker of the bike is ${this.name}.`) 
//         return (`The engine of the bike is ${this.name}.`) 
//     } 
//     } 
//     // Making object with the help of the constructor 
//     let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc'); 
//     let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc'); 
//     let bike3 = new Vehicle('Hero', 'implese', '200cc'); 
    
//     console.log(bike1.name); // Hayabusa 
//     console.log(bike2.maker); // Kawasaki 
//     console.log(bike3.engine);
//     console.log(bike1.getDetails()); 
//     console.log(bike2.getDetails());
//     console.log(bike3.getDetails());
    //Inhertiance example 
class person{ 
	constructor(name){ 
		this.name = name; 
	} 
	//method to return the string 
	toString(){ 
		return (`Name of person: ${this.name}`); 
	} 
} 
class student extends person{ 
	constructor(name,id){ 
		//super keyword to for calling above class constructor 
		super(name); 
		this.id = id; 
	} 
	toString(){ 
		return (`${super.toString()},Student ID: ${this.id}`); 
	} 
} 
let student1 = new student('Mukul',22); 
console.log(student1.toString()); 
