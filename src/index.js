// @flow
import {
  // warn
} from './util'

const plugin: Object = {
  install(Vue: Object): void {
    let audio
    Vue.prototype.$audio = {
      src(source: Array<string>): void {
        audio = document.createElement('audio')
        source.forEach((url) => {
          const item = document.createElement('source')
          item.src = url
          audio.appendChild(item)
        })
      },
      config(options: Object) {
        Object.keys(options).forEach((key) => {
          const value = options[key]
          audio.setAttribute(value)
        })
      },
      play(): void {
        audio.play()
      },
      pause(): void {
        audio.pause()
      },
      canPlayType(type: string) {
        return audio.canPlayType(type)
      },
      get currentTime() {
        return audio.currentTime
      },
      set currentTime(time: number) {
        audio.currentTime = time
      },
      get defaultMuted() {
        return audio.defaultMuted
      },
      set defaultMuted(val: boolean) {
        audio.defaultMuted = val
      },
      get defaultPlaybackRate() {
        return audio.defaultPlaybackRate
      },
      set defaultPlaybackRate(rate: number) {
        audio.defaultPlaybackRate = rate
      },
      get autoplay() {
        return audio.autoplay
      },
      set autoplay(val: boolean) {
        audio.autoplay = val
      },
      get controls() {
        return audio.controls
      },
      set controls(val: boolean) {
        audio.controls = val
      },
      get loop() {
        return audio.loop
      },
      set loop(val: boolean) {
        audio.loop = val
      },
      get playbackRate() {
        return audio.playbackRate
      },
      set playbackRate(rate: number) {
        audio.playbackRate = rate
      },
      get volume() {
        return audio.volume
      },
      set volume(val: number) {
        audio.volume = val
      },
      get muted() {
        return audio.muted
      },
      get ended() {
        return audio.ended
      },
      get error() {
        return audio.error
      },
      get buffered() {
        return audio.buffered
      },
      get paused() {
        return audio.paused
      },
      get duration() {
        return audio.duration
      },
      get currentSrc() {
        return audio.currentSrc
      },
      get readyState() {
        return audio.readyState
      },
      get seekable() {
        return audio.seekable
      },
      get played() {
        return audio.played
      },
      get seeking() {
        return audio.seeking
      },
      on(name: string, handler: Function) {
        audio.addEventListener(name, handler.bind(this), false)
      }
    }
  }
}

export default plugin
