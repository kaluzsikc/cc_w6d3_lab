const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titles = function() {
  return this.films.map(film => film.title);
};

Cinema.prototype.findByTitle = function(title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.filterByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.filterByYear = function(year) {
  return this.films.filter(film => film.year === year);
};

Cinema.prototype.checkByYear = function(year) {
  return this.films.some( film => film.year === year);
}

Cinema.prototype.longerLengthThan = function(length) {
  return this.films.some( film => film.length > length);
}

Cinema.prototype.totalLength = function() {
  return this.films.reduce((total, film) => total + film.length, 0);
}
module.exports = Cinema;
