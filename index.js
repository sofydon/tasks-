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

    for (let i = 20; i >=10; i--) {
        if (i === 13){
            break;
        }
        console.log(i);
    }
}
secondTask();

function thirdTask() {
    // при помощи цикла for выведите все четные числа от 2 до 10 включительно
    for (let i = 0; i <= 10; i++) {
        if (i % 2) continue;
        console.log(i);
    }
}
thirdTask();