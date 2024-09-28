
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b416f6695448bfc84271423791e9ca0f&page=1'
const IMG_pATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b416f6695448bfc84271423791e9ca0f&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)
search.focus();

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${IMG_pATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${Math.floor(vote_average*10)/10}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieEl);
    });
}


function getClassByRate(vote) {
    if(vote>=8){
        return 'green';
    }
    else if(vote>=5) {
        return 'orange';
    }
    else {
        return 'red';
    }
}


form.addEventListener('submit' , (e) => {
    e.preventDefault()

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    }
    else {
        window.location.reload()
    }
})