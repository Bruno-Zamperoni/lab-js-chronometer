class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() =>{
      this.currentTime++
      if(printTimeCallback){
        printTimeCallback()
      }
    } , 1000);
    
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime%60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigits = value.toString();
    if (twoDigits.length == 1) {
      twoDigits = "0" + twoDigits
    }
    return twoDigits;
}

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
