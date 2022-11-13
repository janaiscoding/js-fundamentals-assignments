//Fundamentals Part 3 - The Odin Project: https://www.theodinproject.com/lessons/foundations-fundamentals-part-3#assignment

//function add7(x) {
//    console.log( x + 7);
//}

//function multiply(a,b) {
//    console.log(a*b);
//}

//function capitalize(string)
//{
  //   let one = (string[0].toUpperCase());
  //   two = string.slice(1, ); 
    // let rest = (two.toLowerCase());
  //  newText = one + two; //shows just first letter capitalized 
    // newText= one + rest; //shows first letter capitalized, everything else lower case.
 //   console.log(newText);
//}
// example: capitalize("i am A STRING")

//function lastLetter(string)
//{
  // last =  string.charAt(string.length-1); 
  //  console.log(last);
//}
// example: lastLetter("the last letter")

//https://javascript.info/object#tasks 
//Task 1 
let user = {};
user.name: "John",
user.surname: "Smith",
user.name = "Pete";
delete user.name;
//task 2
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
//task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;
  for (let key in salaries){
    sum += salaries[key]; 
  }

  //task 4
  // before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  function multiplyNumeric(obj){
    for (let key in obj) {
    if (typeof obj[key] === 'number') {
        obj[key] *= 2;
    }
  }
}