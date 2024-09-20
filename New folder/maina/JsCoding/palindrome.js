// palindrome = if we read the word from starting to ending and ending to starting it would be same string
//Ex: level

let str1 = ["taco cat"];
let convertString = str1.join("")
let str = convertString.replace(" ", "");
let len = str.length;
let rev = '';

for (var i=len-1; i>=0; i--) {
    rev += str[i]
}//palindrome
//ternary operator ? :
let result = str == rev ? "palindrome" : "not a palindrome";
console.log(result);

// let strr = ["ta co cat"]
let  strr =convertString.replace(""," ","");
