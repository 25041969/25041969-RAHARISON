class Dice {
  numbers = [1, 2, 3, 4, 5, 6];
  roll() {
    return this.numbers[Math.floor(Math.random() * this.numbers.length)];
  }
}
