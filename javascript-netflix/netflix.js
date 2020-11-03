const trendingNow = document.querySelector(".trending-now");
const original = document.querySelector(".netflix__orignal");
const action = document.querySelector(".action__movies");
const comedy = document.querySelector(".comedy__movies");
const banner = document.querySelector(".banner");

const API_KEY = "5bfb829b451ecc3a784c5d9e5e07cfee";
const imageUrl = "https://image.tmdb.org/t/p/original/";
const fetchTrending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
// const result = `${baseUrl}${fetchTrending}`;

const requests = [
  `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  `/discover/movie?api_key=${API_KEY}&with_genres=99`,
];

const movies = [];

function getMovies() {
  requests.map(async (request) => {
    const baseUrl = await fetch(`https://api.themoviedb.org/3${request}`);
    const newUrl = await baseUrl.json();
    movies.push(newUrl.results);
  });
}

function component() {
  trendingNow.innerHTML = movies[0].map((movie) => {
    return `<div class="trending-movies">
        
         <img src="${imageUrl}${movie.backdrop_path}">
        <h4 class="title">${
          movie.title || movie.original_name || movie.name
        }</h4>
        </div>`;
  });
}

function component2() {
  original.innerHTML = movies[1].map((movie) => {
    return `<div class="trending-movies">
        
        <img src="${imageUrl}${movie.backdrop_path}">
       <h4 class="title">${
         movie.title || movie.original_name || movie.name
       }</h4>
       </div>`;
  });
}

function component3() {
  action.innerHTML = movies[2].map((movie) => {
    return `
      <div class="trending-movies">
      
      <img src="${imageUrl}${movie.backdrop_path}">
      <h4 class="title">${movie.title || movie.original_name || movie.name}</h4>
        </div>`;
  });
}

function component4() {
  comedy.innerHTML = movies[3].map((movie) => {
    return `
        <div class="trending-movies">
        <img src="${imageUrl}${movie.backdrop_path}"><h4 class="title">${
      movie.title || movie.original_name || movie.name
    }</h4>
          </div>`;
  });
}

getMovies();

const usefull = [];

// async function fetchData() {
//   requests.map(async (request) => {
//     const revise = await fetch(`https://api.themoviedb.org/3${request}`);
//     const Url = await revise.json();
//     usefull.push(
//       Url.results[Math.floor(Math.random() * Url.results.length - 1)]
//     );
//     banner.poster = `${imageUrl}${usefull[0].backdrop_path}`;
//     console.log(usefull[0].name || usefull[0].original_name);
//   });
// }

// fetchData();
setTimeout(() => {
  component();
  component2();
  component3();
  component4();
}, 400);
