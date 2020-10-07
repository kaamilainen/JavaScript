"use strict";
// //TASK 4








// //TASK 3

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many films you have seen?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many films you have seen?', '');
//     }
// }
// //start();

// const personalMovieDB =  {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// // function showMyDB(hidden) {
// //     if (!hidden){
// //         console.log(personalMovieDB);
// //     }
// // }
// //showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++){
//         let question = prompt(`What is your favourite genres number ${i}?`, '');
//         personalMovieDB.genres[i-1] = question;
//         //personalMovieDB.genres[i-1] = prompt(`What is your favourite genres number ${i}?`, '');
//         //second is faster
        
//     }
// }
// writeYourGenres();


// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('What is the last one?', ''),
//               b = prompt('How would you rate it?', '');
              
//               if (a != null && b != null && a != '' && b != '' && a.length < 50){
//                     personalMovieDB.movies[a] = b;
//                     console.log('done');
//                 } else {
//                     console.log('error');
//                     i--;
//                 }   
//     }
// }
// //rememberMyFilms();

// function detectPersonalLevel(){
//     if (numberOfFilms <= 10) {
//         prompt("You have watched a few films");
//     } else if (numberOfFilms > 10 && numberOfFilms < 30) {
//         prompt("You doing well");
//     } else if (numberOfFilms >= 30) {
//         prompt('You are a cinemamen!');
//     } else {
//         console.log('error');
//     }
// }
// //detectPersonalLevel();

// console.log(personalMovieDB);








//TASK 2

//const numberOfFilms = +prompt('How many films you have seen?', '');
//const age = +prompt("how old are you", "");

// const personalMovieDB =  {
//     count: numberOfFilms,
//     //age: age,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//personalMovieDB.age = age;

// if (numberOfFilms <= 10) {
//     prompt("You have watched a few films");
// } else if (numberOfFilms > 10 && numberOfFilms < 30) {
//             prompt("You doing well");
//         } else if (numberOfFilms >= 30) {
//             prompt('You are a cinemamen!');
//             } else {
//                 console.log('error');
//             }

// for (let i = 0; i < 1 /*i<2*/; i++) {
//     const a = prompt('What is the last one?', ''),
//           b = prompt('How would you rate it?', '');
//           //c = prompt('actor first name', ''),
//           //d = prompt('actor family name', '');
//           if (a != null && b != null && a != '' && b != '' && a.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 //personalMovieDB.actors[c] = d;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }   
// }

// console.log(personalMovieDB);



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