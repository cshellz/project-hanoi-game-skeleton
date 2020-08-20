class HanoiGame {
  constructor(arg = [ [3, 2, 1], [], [] ] ) {
    //console.log(this.arg)
    //this.towers();
    this.towers = arg;
    // if (arg) { //if there is an arg
    //   this.towers = arg;
    // } else {
    //   this.towers = [ [3, 2, 1], [], [] ];
    // }
  }

  //methods can access or change properties of a class
  //methods can create new properties

  //1. should have a "towers" property
  // towers() {
  //   if (this.arg) { //if there is an arg
  //     return this.arg;
  //   } else { //init w/o arg
  //     // for (let i = 1; i <= 3; i++) {
  //     //   newArray.push(...i);
  //     // }
  //     return [ [3, 2, 1], [], [] ]
  //   }
  // };

  isValidMove(startTowerIdx, endTowerIdx) {}

  move(startTowerIdx, endTowerIdx) {}

  isWon() {}

  // the below methods are complete and do not need to be modified
  print() {
    // will print our board nicely to our user
    console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower: ", start => {
      const startTowerIdx = parseInt(start);
      reader.question("Enter an ending tower: ", end => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  run(reader, callback) {
    // we will prompt our user to provide a start and stop index using
    // a readline interface
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      // if the move is invalid we tell the user
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      if (!this.isWon()) {
        // Continue to play!
        this.run(reader, callback);
      } else {
        this.print();
        console.log("You win!");
        callback();
      }
    });
  }
} //end of class Hanoi

// let incomingArg = [ [], [3, 2, 1], [] ];
// const newHanoiGame = new HanoiGame();
//   newHanoiGame.towers();
//   console.log(newHanoiGame.towers())

module.exports = HanoiGame;
