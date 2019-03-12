'use strict';

class SimpleEmitter {
  constructor() {
    this.cache = [];
  }
  on(name, callback, once = false) {
    this.cache[name] = this.cache[name] || [];
    const index = this.cache[name].push({
      callback,
      once,
      if: () => true
    }) - 1;
    return Object.assign(this, {
      if: c => this.cache[name][index].if = c
    });
  }
  once(name, callback) {
    return this.on(name, callback, true);
  }
  emit(name, ...vals) {
    for (const obj of this.cache[name] || []) {
      const bol = obj.if(...vals);
      if (bol) {
        try {
          obj.callback(...vals);
        }
        catch (e) {
          console.error(e);
        }
      }
      if (bol && obj.once) {
        const index = this.cache[name].indexOf(obj);
        this.cache[name].splice(index, 1);
      }
    }
    return this;
  }
  off(name, callback) {
    (this.cache[name] || []).forEach((obj, index) => {
      if (obj.callback === callback) {
        this.cache[name].splice(index, 1);
      }
    });
  }
}
