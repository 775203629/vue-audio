/* @flow */

export function warn(msg: string, err?: Error) {
  if (window.console) {
    console.warn(`[vue-audio] ${msg}`)
    if (err) {
      console.warn(err.stack)
    }
  }
}
