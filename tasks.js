"use strict";

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
    }
    console.log(i);
    
}




/*TASK 2
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




/*TASK 1
const numberOfFilms = +prompt('How many films you have seen?', '');

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What is the last one?', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('What is the last one?', ''),
      d = prompt('How would you rate it?', '');
      
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);*/