document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('lista-filmes');
    const addMovieForm = document.getElementById('add-filme');

    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    const displayMovies = () => {
        movieList.innerHTML = '';
        movies.forEach((movie, index) => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            movieElement.innerHTML = `
                <img src="${movie.url}" alt="Capa do filme">
                <h3>${movie.titulo}</h3>
                <p><strong>Autor:</strong> ${movie.autor}</p>
                <p><strong>Data de Lançamento:</strong> ${movie.dataLancamento}</p>
                <p><strong>Gênero:</strong> ${movie.genero}</p>
                <p><strong>Duração:</strong> ${movie.duracao} min</p>
                <p><strong>Sinopse:</strong> ${movie.sinopse}</p>
                <button onclick="deleteMovie(${index})">Excluir</button>`;

            movieList.appendChild(movieElement);
        });
    };

    const addMovie = (event) => {
        event.preventDefault();

        const newMovie = {
            titulo: document.getElementById('titulo').value,
            autor: document.getElementById('autor').value,
            dataLancamento: document.getElementById('data-lancamento').value,
            genero: document.getElementById('genero').value,
            duracao: document.getElementById('duracao').value,
            sinopse: document.getElementById('sinopse').value,
            url: document.getElementById('url').value
        };

        movies.push(newMovie);
        localStorage.setItem('movies', JSON.stringify(movies));
        addMovieForm.reset();
        displayMovies();
    };

    window.deleteMovie = (index) => {
        movies.splice(index, 1);
        localStorage.setItem('movies', JSON.stringify(movies));
        displayMovies();
    };

    addMovieForm.addEventListener('submit', addMovie);
    displayMovies();
});
  


function ocultarExibir() {

    document.getElementById("formulario").classList.toggle("ocultar")
}