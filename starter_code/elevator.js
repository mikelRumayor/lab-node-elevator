const UP = 'UP'
const DOWN = 'DOWN'

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.intervalId  = null;
    this.direction = null
  }

  start() {
    this.intervalId = setInterval(() => {this.update()}, 1 * 1000)
  }
  stop() {
    clearInterval(this.intervalId)
  }
  update() {
    this.log()
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp()
  {
    if (this.floor < this.MAXFLOOR) {
      this.floor++
      this.direction = UP
      this.log()
    }
  }
  floorDown() {
      if (this.floor > 0) {
        this.floor--
        this.direction = DOWN
        this.log()
    }
  }
  call() { }
  log(){
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
