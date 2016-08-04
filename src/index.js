// @flow
import {
  warn
} from './util'

const plugin: Object = {
  install(Vue: Object): void {
    Vue.prototype.$audio = {
      init(attributes: Object): void {

      }
    }
  }
}

export default plugin
