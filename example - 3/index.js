/* globals Emitter */
'use strict';

var e = new Emitter();
e.on('test', () => console.log(1));
e.on('test', () => console.log(2));
e.on('test', () => {
  console.log(3);
  return e.Break;
});
e.on('test', () => console.log(4));

e.emit('test');
