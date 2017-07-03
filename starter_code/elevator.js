class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = null;
    this.intervalId  = null;
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
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
    console.log(`Direction: $(this.direction) | Floor: $(this.floor)`)
  }
}

module.exports = Elevator;
