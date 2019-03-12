/* globals Emitter */
'use strict';

var e = new Emitter();
e.on('test', a => new Promise(resolve => window.setTimeout(resolve, a, 1)));
e.on('test', a => new Promise(resolve => window.setTimeout(resolve, a * 2, 2)));

var values = e.collect('test', 1000);
(async () => {
  for (const f of e.list('test')) {
    console.log(await values.get(f));
  }
})();
