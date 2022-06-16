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
    return x.replace(/[ab]/g,x=>x=="a"?"b":"a")
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