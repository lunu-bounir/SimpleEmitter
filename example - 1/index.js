/* globals Emitter */
'use strict';

var e = new Emitter();
var callback = (a, b) => console.log('test 1', a, b);
e.on('test', callback);
e.on('test', (a, b) => console.log('conditional (if b === 15)', a, b)).if((a, b) => b === 15);
e.once('test', (a, b) => console.log('conditional (if b === 15) (once)', a, b)).if((a, b) => b === 15);
e.once('test', (a, b) => console.log('test 1 (once)', a, b));
e.emit('test', 12, 14);
e.emit('test', 12, 15);

e.off('test', callback);
e.emit('test', 12, 16);
e.emit('test', 12, 15);
