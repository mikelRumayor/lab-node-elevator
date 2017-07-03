const UP = 'UP'
const DOWN = 'DOWN'

class Elevator {
  constructor(){
    this.floor      = 0
    this.MAXFLOOR   = 10
    this.requests   = []
    this.waitingList  = []
    this.passengers = []
    this.intervalId  = null
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
  _passengersEnter() {
    this.passengers = this.passengers.concat(this.waitingList.filter(e => e.originFloor == this.floor))
    this.waitingList = this.waitingList.filter(e => e.originFloor != this.floor )
  }
  _passengersLeave() {
    this.passengers = this.passengers.filter(e => e.destinationFloor != this.floor);
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++
      this.direction = UP
      this.log(console.log(`Direction: ${this.direction} | Floor: ${this.floor}`))
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor--
      this.direction = DOWN
      this.log(console.log(`Direction: ${this.direction} | Floor: ${this.floor}`))
    }
  }
  call(person) {
    if( this.passengers.indexOf(person) === -1 ) {
      this.requests = [...this.requests, person.originFloor]
      this.waitingList = [...this.waitingList, person]
    }

  }
  log(callback){
    callback()
  }
}

module.exports = Elevator;
