import Hlog from './lib'

const hlogInstance = {
  logInstance: null,
  init(config) {
    if (!logInstance) {
      logInstance = new Hlog(config)
    }
    return logInstance
  }
}

export default hlogInstance