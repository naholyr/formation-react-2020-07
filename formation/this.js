'use strict'

const counter = {
  value: 1,
  incr() {
    this.value++
  },
  incrAsync() {
    setTimeout(() => {
      console.log(this);
      this.incr();
    }, 1);
  },
};

counter.incrAsync()

setTimeout(function () {
  console.log(counter.value)
}, 2);
