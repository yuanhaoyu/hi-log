const Vconsole = () => import('vconsole');

class Hlog {
  constructor() {
    this._autoInit();
  }
  _autoInit() {
    if (window) {
      if (window['log']) {
        return window['log']
      } else {
        window['log'] = this._log;
      }
    }
  }
  init(options) {
    
  }
  _log() {
    const arg = [].slice.call(arguments);
    console.log(...arg);
  }
}