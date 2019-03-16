/* globals Emitter */
'use strict';

var e = new Emitter();
var obj = {};
e.watch(obj, 'value', 'event-name');
e.watch(obj, 'name');
e.on('event-name', v => console.log(v));
e.on('name-changed', v => console.log(v));
obj.value = 12;
