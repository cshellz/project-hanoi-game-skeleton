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



  isValidMove(startTowerIdx, endTowerIdx) {
    if(startTowerIdx === endTowerIdx){
      return false;
    }

    const startTower = this.towers[startTowerIdx];
    const endTower = this.towers[endTowerIdx];

    if(startTower === undefined || startTower.length === 0){
      return false;
    }

    if(endTower.length === 0){
      return true;
    }
    const startDisk = startTower[startTower.length -1];
    const endDisk = endTower[endTower.length -1];

    if(startDisk < endDisk){
      return true;
    } else {
      return false;
    }

  }

  move(startTowerIdx, endTowerIdx) {
    this.isValidMove();
      const startTower = this.towers[startTowerIdx];
      const endTower = this.towers[endTowerIdx];
      let endDisk = startTower.pop(startTower.length -1);
      endTower.push(endDisk);
      if(endTowerIdx !== 0 || endTowerIdx !== undefined || startTowerIdx === 0){
        return true;
      } else {
        return false;
      }

  }

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
//   newHanoiGame.prototype.isValidMove();


module.exports = HanoiGame;
