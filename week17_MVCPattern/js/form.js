

var createMovieButtonNode = document.querySelector('.movie_create_button');
var movieTitleInputNode = document.querySelector('.movie_title');
var movieLengthInputNode = document.querySelector('.movie_length');
var movieGenreSelectionNode = document.querySelector('.movie_genre');
var movieListNode = document.querySelector('.movie_list');
var dropdownMoviesSelectionNode = document.querySelector('.dropdown_movies');

var programCreateButtonNode = document.querySelector('.program_create_button');
var programDateSelectionNode = document.querySelector('.program_date');
var programListNode = document.querySelector('.program_list');
var programDropdownSelectionNode = document.querySelector('.dropdown_program');

var addMovieToTheProgramButtonNode = document.querySelector('add_movie_to_program_button');
var selectedMovieNode = dropdownMoviesSelectionNode.value;
var selectedProgramNode = programDropdownSelectionNode.value;



//create Movie part
function createMovie() {
    var newMovie = new Movie(movieTitleInputNode.value, parseInt(movieLengthInputNode.value), movieGenreSelectionNode.value);
    
    var newLi = document.createElement('li');
    newLi.textContent = newMovie.getData();
    movieListNode.appendChild(newLi);

    movieTitleInputNode.value = '';
    movieLengthInputNode.value = '';
    movieGenreSelectionNode.value = '';

    //Movie dropdown selection part

    var newOption = document.createElement('option');
    newOption.textContent = newMovie.getData();
    dropdownMoviesSelectionNode.appendChild(newOption);
   
};

createMovieButtonNode.addEventListener('click', createMovie);


// create Program part

function createProgram() {
    var newProgram = new Program(programDateSelectionNode.value);

    var newProgramLi = document.createElement('li');
    newProgramLi.textContent = newProgram.getData();
    programListNode.appendChild(newProgramLi);

    //Program dropdown selection part

    var newProgramOption = document.createElement('option');
    newProgramOption.textContent = newProgram.getData();
    programDropdownSelectionNode.appendChild(newProgramOption);

    programDateSelectionNode.value = '';
};

programCreateButtonNode.addEventListener('click', createProgram);


//Add Movie to the Program part

function addMovieToTheProgram() {
    
};

addMovieToTheProgram.addEventListener('click', addMovieToTheProgram);

