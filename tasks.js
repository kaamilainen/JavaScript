
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

console.log(personalMovieDB);


