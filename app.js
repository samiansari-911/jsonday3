// let Smartphone = {
//     Name : "Iphone 12",
//     BAttery : "6000MAh",
//     Rom : "8gb",
//     Ram : "560gb" ,
//     Camera : "70Mp",
//     Price : "250k" 
// }

// let string = JSON.stringify(Smartphone)

// localStorage.setItem("Mobile Data" , string ) 

// let data =localStorage.getItem("Mobile Data")

// console.log(data);


// function displayResult(){

// let JSONtoObj = JSON.parse(data)

// // console.log(JSONtoObj);

// document.getElementById("con").innerHTML = ""

// for(let a in JSONtoObj){

//     document.getElementById("con").innerHTML += (a + " : " + JSONtoObj[a] + "<br>");

// }

// }

// addEventListener('click', displayResult)

// Conditional Statment
// if , ifelse , else if , nested if

// const car =  prompt("Enter Your Car Number");

// if(car <= 100){
//     console.log("This Is Your Car");
// }
// else if(car > 100 && car <200){
//     console.log("This Is Not Your Car")
// }
// else{
//     console.log("Sorry Better Luck Next Time");
// }

// new function 

// let number = prompt("enter the number");

// if (number % 2 === 0){
//     console.log('the number is even');
// }
// else{
//     console.log("number is odd")
// }


// 

// function fullname(firstname,lastname){
//     return( firstname+lastname)
// }
//  let result = fullname("sami" "Ali");
//  console.log(result);


// let addition = (a ,b) => {
//     return 'the addition of two number is $ (a+b)';
// }

// let result = addition(2,4)
// document.write(result)


// let arr = [2, 3, 4, 5, 6, 78, 98 ,]


// array Function


// let names = ["ebad" , "sami" , "saad" ,"ali" , "yahya"]
// // for (let i= 0 ; i < names.length; i++){
// //     console.log(name[i]);
// // }
// names.forEach(value=>{
//     console.log(value)
// });

// let displayname = (name, father) => console.log(name + father);
// displayname("salman" , "saleem");

//  for in Loop

// let car ={
//     Name : "Civic",
//     Model : "2022",
//     Color : "White",
//     Make : "Honda"
// }
//  for(let i in car){
//     document.write(i + " " + car[i] + "<br>")
//  }

// coonstruction functuion

// function Details (name , email , phone , city){
//     this.Name = name,
//     this.Email = email,
//     this.Phone = phone,
//     this.City = city
// }

// let displayDetails1 = new Details("sami" ," sami@gmail.com", "085415535" , "karachi" + "<br>" + "<hr>")
// let displayDetails2 = new Details("saad" ," saad@gmail.com", "085414345" , "lahore" + "<br>" + "<hr>")

// console.log(displayDetails1);
// console.log(displayDetails2);



// // coonstructor functuion with for loop


// for(let a in displayDetails1){
//     document.write(a+ ':' + displayDetails1[a] + "<br>")
// }

// for(let i in displayDetails2){
//     document.write(i+ ':' + displayDetails2[i] + "<br>")
// }


// coonstruction functuion with class function


// class Student {
//     constructor(name , phone ,gender ,email){
//         (this.Name = name),
//         (this.Phone = phone),
//         (this.Gender = gender),
//         (this.Email = email)
//     }

// msg(){
//     console.log("Hello");
// }

// static greet(){
//     console.log("Greetings");

// }
// }


// let std = new Student("ali", "35362456","Male" , "ali@gmail,com");
// std.msg();
// console.log(std);
// Student.greet();


// for(let a in std){
//     document.write(a + ":" + std[a] + "<br>"  + "<hr>")
// }


// constructor function with inheritance

// class Parent {
//     constructor(name , phone ,gender ,email){
//         (this.Name = name),
//         (this.Phone = phone),
//         (this.Gender = gender),
//         (this.Email = email);
//     }

//     msg() {
//         console.log("hello");
//     }
//     static greet(){
//         console.log("Greeting");
//     }
// }
//   class Child extends Parent{
//     constructor(name,phone,gender,email){
//         super(name,phone,gender,email)
//     }
//   childmsg(){
//     console.log("abbuuuuu");
//   }
//   }


//   let parent = new Parent("abdulHAfeez" ,"924643523","Male" , "hafeezansari@gmail.com");
//   let child = new Child("SamiHAfeez" ,"924643523","Male" , "apsamiullah911@gmail.com");
// child.msg()
// child.childmsg()
// console.log(Parent);
// console.log(child);

// for( let i in parent){
//     document.write(i+ ':' +parent[i] +"<br>")
// }


// inheritance object practise

class PTCl {
    constructor( feature1, feature2){
        (this.feature1 = feature1),
        (this.feature2 = feature2)
    }
}

class Mobile extends PTCl{
    constructor( feature1 , feature2 , feature3){
       super( feature1 , feature2 , feature3)
       this.feature3 = feature3
    }
       
}

let parent = new PTCl( "Incoming call", "outcomingcall" );

let child = new  Mobile("game" ," videocall" , "audiocall")

console.log(parent);
console.log(child);



// program with scope


for ( let a in child){
    document.write(a+ ":" +child [a] + "<br>")
}

let age = 34 ;

function getAge(){
let result = age + 2;
console.log(result)
}

console.log(age);
getAge();

function getanotherAge(){
    let result = result + 5;
    console.log (result);
}

getanotherAge()



































