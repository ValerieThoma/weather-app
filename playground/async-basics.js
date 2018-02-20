console.log('Starting app');

setTimeout(() => {
  console.log('inside of callback');
}, 1000);

setTimeout(() => {
  console.log('zero second dealy');
}, 0);

console.log('Finishing up');


// The Call Stack  --->  Node APIs ----->   Callback Queue ----->   EVENT LOOP ------->
// The Call Stack (part of V8)
