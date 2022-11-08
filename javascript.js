//Fundamentals Part 3 - The Odin Project: https://www.theodinproject.com/lessons/foundations-fundamentals-part-3#assignment

//function add7(x) {
//    console.log( x + 7);
//}

//function multiply(a,b) {
//    console.log(a*b);
//}

function capitalize(string)
{
     let one = (string[0].toUpperCase());
     two = string.slice(1, ); 
    // let rest = (two.toLowerCase());
    newText = one + two; //shows just first letter capitalized 
    // newText= one + rest; //shows first letter capitalized, everything else lower case.
    console.log(newText);
}
// example: capitalize("i am A STRING")

function lastLetter(string)
{
   last =  string.charAt(string.length-1); 
    console.log(last);
}
// example: lastLetter("the last letter")