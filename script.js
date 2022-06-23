// let num = 123;
// alert(num);

// // let a = 1;
// // let b = 2;
// // let c = 3;

// // let a = 1, b = 2, c =3;

// // let a,b,c;
// //  a = 1;
// //  b = 2;
// //  c = 3;

// // let a = 10;
// // console.log(a);
// // a = 20;
// // console.log(a);

// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt = `aaa ${str1} bbb ${str2} ccc`;
// console.log(txt);

// let number = 1234;
// console.log(String(number).length);

// let test = Boolean('');
// console.log(test);

// let text = 'abcde';
// let other = text[4] + text[3] + text[2] + text[1] + text[0];
// console.log(other);

// let str = String(12345);
// console.log((str[4])+ (str[3]) + (str[2]) + (str[1]) + (str[0]));

// let num1 = 3;
// let num2 = num1++;
// console.log(num1);
// console.log(num2);

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
    return x.replace( / /g, '')
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





