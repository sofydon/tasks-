//создайте ф-цию, кот будет на вход принимать 1 аргумент с именем чел и возвращать строку
function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Антон'));

//создать ф-цию, кот принимает 1 аргумент в виде целого числа и возвр массив из 3 чисел
//1 на 1 меньше, сам аргумент, 1 на 1 больше
function returnNeighboringNumbers(n) {
    return [n-1, n, n+1];
}
console.log(returnNeighboringNumbers(4));

//создать ф-цию, кот будет принимать 2 аргумента, оба числа.1-это база, 2-сколько раз надо
//повторить число в прогрессии. ф-ция должна возвр строку, где числа идут по порядку, разделенные
//тремя дефисами, после последнего не должно быть
function getMathResult(base, amount) {
    if(typeof(amount) !== 'number' || amount <= 0) {
        return base;
    }
    let string = '';
    for (let i = 1; i <= amount; i++) {
        if (i === amount) {
            string += `${base*i}`;
        }else {
            string += `${base*i}---`;
        }
    }  
    return string;
}
console.log(getMathResult(5, 3));


function toCamelCase(str){
    let newStr = "";
    if(str){
        let wordArr = str.split(/[-_]/g);
        for (let i in wordArr){
            if(i > 0){
                newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
            }else{
                newStr += wordArr[i];
            }
        }
    }
    else {
        return newStr;
    }
    return newStr;

}
console.log(toCamelCase("I-love-code"));


function camelize(str) {
    return str.replace(/W+(.)/g, function(match, chr){
          return chr.toUpperCase();
      });
}
console.log(camelize("i-love_code"));

function disemvowel(str) {
    return str.replace(/[aeiouy]/gi, '');
  }
console.log(disemvowel("This website is for losers LOL!"));



const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(records, id, prop, value) {
    if(prop !== 'tracks' && value !== ""){
        records[id][prop] = value;
      } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks')  === false){
        records[id][prop] = [value];
      } else if (prop === 'tracks' && value !== ""){
        records[id][prop].push(value);
      } else if (value === ""){
        delete records[id][prop];
      }
    return records;
  }
  console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
  console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
  console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));


  function apple(x){
    if (x * x > 1000) {
      return "It's hotter than the sun!!";  
    } else {
      return "Help yourself to a honeycomb Yorkie for the glovebox.";
    }
  }
  console.log(apple(50));

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
  console.log(multiply([2], 1));

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
  console.log(multiply([2], 1));

  function sum(arr, n) {
    if (n <= 0) {
      return 0; 
    } else {
      return sum (arr, n - 1) + arr [n - 1];
    }
  }
  console.log(sum([2, 3, 4], 1));
  console.log(sum([1], 0));


  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName == name) {
          if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
          } else {
            return 'No such property';
          }           
      }     
    }
    return 'No such contact';
  
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Kristian", "lastName"));