'use srtict';

console.log(1);

setTimeout(() => {
    console.log('timeout');
}, 2000);

setTimeout(() => {
    console.log('timeout_4000');
}, 4000);

console.log(2);


const userName = 'John';
let userNumber = 25;
userNumber = 24;
console.log(userName);
console.log(userNumber);


function firstTask() {
    // при помощи цикла вывести от 5 до 10 включительно
    for (let i = 5; i <=10; i++) {
        console.log(i);
    }  
}
firstTask();

function secondTask() {
    // при помощи цикла for вывести от 20 до 10 в обратном порядке. когда цикл дойдет до 13 - остановить весь цикл

    for (let i = 20; i > 10; i--) {
        if (i === 13) {break;} {
            console.log(i);
        }    
    }
}
secondTask();

function thirdTask() {
    // при помощи цикла for выведите все четные числа от 2 до 10 включительно
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }        
    }
}
thirdTask();

function fourthTask() {
    // переписать код с for на while:
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

    let i = 2;
    while (i < 16) {
        i ++;
        if (i % 2 === 0) {
            continue;
            } else {
            console.log(i);
        }
    }
}
fourthTask();

function fifthTask() {
    const arrayOfNumbers = [];

    // заполнить массив цифрами от 5 до 10.
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers [i - 5] = i;
    }
    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();

function sixthTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // заполнить новый массив числами из старого

    for (let i = 0; i < arr.length; i++) {
        result [i] = arr [i]; 
    }
    console.log(result);
    
    // Не трогаем
    return result;
}
sixthTask();

function seventhTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    // измените массив так, чтобы все числа были увеличены в 2 раза, а если строка - добавить done.
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }
    console.log(data);
    return data;
}
seventhTask();

function eighthTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // развернуть массив
    for (let i = 0; i < data.length; i++ ) {
        result[i] = data[(data.length - 1) - i];
    }
    
    console.log(result);
    return result;
}
eighthTask();

// *
// ** 
// ***
// ****
// *****
// ******
let result = '';
const leng = 7;
for (let i = 1; i < leng; i++) { 
    for (let j = 0; j < i; j++) {
        result +="*";
    }
    result += '\n';
}
console.log(result);

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str = str + j;
    }
    console.log(str);
}

//1
//2 2
//3 3 3
//4 4 4 4
//5 5 5 5 5 
let str = "12345";
for (let i = 1; i <= 5; i++) {
    let number = str[i - 1];
    console.log((number + "").repeat(i));
}

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let res = '';
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        res += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        res +="*";
    }
    res += '\n';
}
console.log(res);


const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);

const myArra = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);

