function Movie(title, length, genre) {
    if (!title) {
        throw new Error ('Field title is required');
    };

    if (!length) {
        throw new Error ('Field length is required')
    };

    if (!genre) {
        throw new Error ('Field genre is required')
    };

    this.title = title;
    this.length = length;
    this.genre = genre;
    this.genreInitials = genre[0].toUpperCase() + genre[genre.length - 1].toUpperCase();
};

Movie.prototype.getData = function () {
    return this.title + ', ' + this.length + 'min , ' + this.genreInitials;
};


function Program(date) {
    if (!date) {
        throw new Error ('Date is required');
    };

    this.date = date;
    this.listOfMovies = [];
};

Program.prototype.numberOfMOviesInProgram = function() {
    var count = 0;
    this.listOfMovies.forEach(function () {
        count++;
    })
    return count;
};


Program.prototype.addMovie = function(movie) {
    if (!movie || !(movie instanceof Movie)) {
        throw new Error ('Invalid Movie data')
    }

    this.listOfMovies.push(movie);
    return 'Movie added to the list'
};


Program.prototype.getTotalMoviesLength = function () {
    var totalMoviesLength = 0;
    this.listOfMovies.forEach( function (movie) {
        totalMoviesLength += movie.length;
    });
    return totalMoviesLength + 'min';
};

Program.prototype.getData = function () {
    var result = this.date + ', ' + this.listOfMovies.length + ' movies , duration: ' + this.getTotalMoviesLength() + '\n';
    return result;
};




//testing
var movie1 = new Movie('Superman', 120, 'Action');
var program1 = new Program('12.15.2021');
program1.addMovie(movie1);

console.log(movie1.getData());
console.log(program1.getData());