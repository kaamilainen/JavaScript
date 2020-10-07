//console.log(1);
"use strict";//modern mode, not old, new version of coding
/*LESSON 20*/

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};
options.makeTest();

console.log(Object.keys(options));//получаем массив со всеми ключами
console.log(Object.keys(options).length);

// console.log(options.name);
// delete options.name;
// console.log(options);

// let counter = 0;


// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Feature ${i} has value ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Feature ${key} has value ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);







/*LESSON 19*/

// function first() {
//     //Do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log(`I learn ${lang}`);
//     callback();
// }

// // learnJS('JavaScript', function(){
// //     console.log('I have passed');
// // });
// function done(){
//     console.log('I have passed');
// }

// learnJS('JavaScript', done);





/*LESSON 18*/

//const arr = [1, 2, 3];
//console.log(arr.length);

// const str = "test";

// console.log(str.length);
// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));


// const logg = "hello world";
// console.log(logg.slice(6, 11));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));//второй аргумент это длинна


// const num = 12.2;
// console.log(Math.round(num));


// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));




/*LESSON 15*/

// let num = 20;

// function showFirstMessage(text, argument){
//     console.log(text);
//     num = 20;
// }

// showFirstMessage("Hello");
// console.log(num);






// function calc(a, b){
//     return ( a + b );
// }
// console.log(calc(4, 3));
// console.log(calc(5, 4));
// console.log(calc(9, 6));






// function ret(){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);






// const logger = function() {
//     console.log("hello");
// };

// logger();



// const calculator = (a, b) => { return a + b };


/*LESSON 14
let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

//

do {
    console.log(num);
    num++;
}
while (num < 55);

//
let number = 45;

for (let i = 1; i < 8; i++) {
    console.log(number);
    number--;
}

for (let i = 1; i < 8; i++) {
    if (i === 3){
        break;
        //continue;
    }
    console.log(i);
    
}*/




/*TASK 13
if (4 == 9){
    console.log("ok");
} else{
    console.log("nope");
    }


var num = 50;
if (num < 49){
    console.log("error");
}else if (num > 100){
         console.log("too much");
        }else{
            console.log("ok");
            }



(num === 50) ? console.log("ok") : console.log("error");
//condition  if {               }else{                  }

const a = 51;
switch (a) {
    case 49: console.log("wrong");
        break;
    case 100: console.log("wrong");
        break;
    case 50: console.log("correct");
        break;
    default: console.log("next time");
        break;
}*/









/*LESSON 10



/*LESSON 9
console.log('arr' + " - object");
console.log( 4 + " - object");
console.log( 4 + +" - object");
console.log( 4 + +" 5");
*/


let incr = 10,
    decr = 10;

incr++;
decr--;

//console.log(incr);
//console.log(decr);





/*LESSON 8
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";
alert(`Hi, ${user}`);
*/



/*LESSON 7
//const result = confirm("Are you here?");
//console.log(result);


/*const answer = +prompt("Are you 18?", "");//+ преобразует в стринг
console.log(answer);
console.log(typeof(answer));

const answers = [];

answers[0] = prompt("Your name", "");
answers[1] = prompt("Your surname", "");
answers[2] = prompt("Your age", "");

document.write(answers);/*






/*

let number = 5; //can be changed
const leftBorderWidth = 1; //constanta, no changes

number = 10;
console.log(number);

const obj = {
    a:50
};

obj.a = 10;


var name = "Ivan";

const obj = {
    name: 'Ivan',
    age: 25,
    isMarried: false

};

console.log(obj);
console.log(obj['name']);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', [], {}];
console.log(arr[2]);*/