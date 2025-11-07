class Game {
  constructor({ id, title, console, genre, startDate, finishDate, timePlayed, rating, condition, mission }) {
    this.id = id;
    this.title = title;
    this.console = console;
    this.genre = genre;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.timePlayed = timePlayed;
    this.rating = rating;
    this.condition = condition;
    this.mission = mission;
  }
}

module.exports = Game;
