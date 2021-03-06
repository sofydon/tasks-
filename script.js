'use strict';

const arr = [1, 2, 3, 4, 5, null,'6'];
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'number') {
            console.log(arr[i] * 2);
        }
    }

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.    
function doubleChar(str) {
    let sum = '';
    for (let i = 0; i < str.length; i++) {
         let res = (str[i] + str[i]);
         sum = sum + res;
    }
    return sum;
}    
console.log(doubleChar('Hello World'));

/*Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that
 argument is an integer. 

 function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}*/
function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  Math.floor(integer).toString();
    for(var ix = 0; ix < digits.length; ix++) {
      sum += +digits[ix];
    }
    return sum;
  }
  console.log(getSumOfDigits('234'));

//Modify the spacify function so that it returns the given string with spaces inserted between each character.
//regexp
function spacify(str) {
    return str.replace(/(.)(?!$)/g, "$1 ");
}
console.log(spacify('Hello world'));
console.log(spacify('12345'));

//split, join
function spacify(str) {
    return str.split('').join(' ');
}
console.log(spacify('Hello world'));
console.log(spacify('12345'));

/*Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter,
see example below! E.g. Input: "aa", "bb" , "cc" => Output: "abcabc" */
function tripleTrouble(one, two, three){
    let str = '';
    for (let i = 0; i < one.length; i++) {
        str += one[i] + two[i] + three[i];
    }
    return str;
}
console.log(tripleTrouble('aa', 'bb', 'cc'));

/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b 
(change a to b and vice versa) Leave any incidence of c untouched. Example: 'acb' --> 'bca' 'aabacbaa' --> 'bbabcabb'*/
//regexp
function switcheroo(x){ 
    return x.replace(/[ab]/g,x=>x=="a"?"b":"a");
}
console.log(switcheroo('aabacbaa'));

//loop
function switcheroo(x){
    let str = '';
    for (let i = 0; i < x.length; i++) {
        if ( x[i] === 'a') {
            str = str + 'b';
        } else if (x[i] === 'b') {
            str += 'a';
        } else {
            str += x[i];
        }
    }
    return str;
}
console.log(switcheroo('acb'));

/*you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert 
that string to either lowercase only or uppercase only based on:
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example: solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase. */
function solve(s){
  let up = s.split('').filter(word => word.match(/[A-Z]/)).length;
  let down = s.split('').filter(word => word.match(/[a-z]/)).length;
  if (down >= up) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}
console.log(solve('CODewar'));

/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this: Sam Harris => S.H */
//first 
function abbrevName(name){
    let result = name.split(" ").map(i => {
        return i[0].toUpperCase();
    });
    return result.join(".");
}
console.log(abbrevName('sofia petinova'));


//second
function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.');
}

/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and
stored on a computer. When documents (especially pretty old ones written with a typewriter), are digitised character
recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1 */

function correct(string) { 
    return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}
console.log(correct("L0ND0N"));
console.log(correct('DUBL1N'));

/* you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. */
function squareDigits(num){  
    return +(num.toString().split('').map(i => i * i).join(''));
}
console.log(squareDigits(9119));

/*remove the spaces from the string, then return the resultant string.*/
//split and join method
function noSpace(x){
    return x.split(' ').join('');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
//regex
function noSpace(x){
    return x.replace( / /g, '');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

/* Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.*/
function XO(str) {
    let x = 0;
    let o = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            x++;
        } else if (str[i].toLowerCase() === 'o') {
            o++;
        }
    }
    return x == o; 
}
console.log(XO("xooxx"));
console.log(XO("xxOo"));

/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
 If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false 
if they aren't.*/
function lovefunc(flower1, flower2){
    if (flower1 % 2 == 0 && flower2 % 2 || flower1 % 2 && flower2 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(lovefunc(3, 4));

/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated 
exactly n times. */
//for loop
function repeatStr (n, s) {
    let newStr = '';
    for(let i = 0; i < n; i++){
        newStr += s;
    }
    return newStr;
}
console.log(repeatStr(5, "Hello"));
// string method
function repeatStr (n, s) {
    return s.repeat(n);
}
console.log(repeatStr(5, "L"));
/* Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...
Expected results: spam(6);  // huehuehuehuehuehue */ 
function spam(number){
    return 'hue'.repeat(number);
}
console.log(spam(6)); 

/* Create a function that takes a string and an integer (n).
The function should return a string that repeats the input string n number of times.
If anything other than a string is passed in you should return "Not a string"
Example "Hi", 2 --> "HiHi"; 1234, 5 --> "Not a string" */
var repeatIt = function(str, n) {
    let myStr = "";
    for (let i = 0; i < n; i++) {
        myStr += str;
    } if (typeof(str) != 'string'){
        return 'Not a string';
    }
    return myStr;
};
console.log(repeatIt('hi', 3));

/* When provided with a letter, return its position in the alphabet. */
function position(letter){
    let res = letter.charCodeAt(0) - 96;
    return "Position of alphabet: " + res;
}
console.log(position('z'));
/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric
 decimal integer. You don't need to validate the form of the Roman numeral. */
function solution (roman) {
    let romanSymbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let integer = 0;
    for (let i = 0; i < roman.length; i++ ){
        if (romanSymbol[roman[i]] < romanSymbol[roman[i+1]]) {
            integer -= romanSymbol[roman[i]];
        } else {
            integer += romanSymbol[roman[i]];
        }     
    } 
    return integer;     
}
console.log(solution("XIV"));

/* Implement String#digit? (in Java StringUtils.isDigit(String)), 
which should return true if given object is a digit (0-9), false otherwise.*/ 
String.prototype.digit = function() {
    return /^\d$/i.test(this);
  };
console.log('14'.digit());


let text = "titanic";
let myRegex = /t[a-z]*?i/; // Change this line
let result = text.match(myRegex);
console.log(result);

/*In this kata you will create a function that takes in a list and returns a list with the reverse order.*/ 
function reverseList(list) {
    let result = [];
    for(let i = 0; i < list.length; i++){
        result[i] = list[(list.length -1) - i];
    }
    return result;
}
console.log(reverseList([1, 2, 3, 4]));

function reverseLi(list) {
    return list.reverse();
}
console.log(reverseLi([1, 2, 3, 5]));

/*Implement the function which should return true if given object is a vowel 
(meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.*/
String.prototype.vowel = function() {
        return /^[aeiou]$/i.test(this);  
};
console.log('o'.vowel());

function threeInOne(arr){
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i].slice(arr.length -1);
    }
    return sum; 
    
}
console.log(threeInOne([1,2,3,4,5,6]));

/*Complete function howManydays, function accept 1 parameters:month, means the month of year,
 different month has different days (refer to the following table),
return a number that how many days in this month(month is always greater than 0, less than or equal to 12). */
function howManydays(month){
    let days;
    switch (month){
        case 2:
            days = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        default: 
            days  = 31;    
    }
    return days;
}
console.log(howManydays(3));

/* Coding in function padIt, function accept 2 parameters:
str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string. */
function padIt(str,n){
    while (n > 0) {
        if (n%2==0){
            str = str + "*";
        } else {
            str = "*" + str;
        }
        n--;
    }
    return str;
}
console.log(padIt("a",3));

/* Coding in function pickIt, function accept 1 parameter:arr, it's a number array, 
we need traverse arr by using for loop, if element is odd number, push it to array odd,
if it's a even number, push it to array even.*/
function pickIt(arr){
    var odd=[],even=[];
    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2 == 0){
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return [odd,even];
}
console.log(pickIt([1,2,3]));
/* Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it 
to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.
When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, 
you should traverse dolls until the last element.*/ 
function grabDoll(dolls){
    var bag=[];
    for (let i = 0; i < dolls.length; i++){
        if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
            bag.push(dolls[i]); 
            if (bag.length === 3) {break;}  
        } else {
            continue;
        }   
    }
    return bag;
}
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]));

/* Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.
You need to the traverse the obj, if the length of the object key equals to 5, then push the key value
to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value
to the array as well, if the length of the value is equal to 5.*/
function giveMeFive(obj){
    let arr = [];
    for(let key in obj) {
        if(key.length == 5) {arr.push(key);}
        if(obj[key].length == 5) {arr.push(obj[key]);}
    }
    return arr;
}
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));
console.log(giveMeFive({Pears:"than",apple:"sweet"}));
