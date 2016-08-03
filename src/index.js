// @flow
import {
  warn
} from './util'

const plugin: Object = {
  install(Vue: Object): void {
    Vue.prototype.$audio = {
      audio: null,
      index: 0,
      currentTime: 0,
      isPlayingAll: false,
      sources: [],
      // 初始化
      init(config: Object, sources: Array<string>): void {
        // create element
        this._createAudio(config)
        this._addEventHandler()
        this.sources = sources
      },
      // 创建audio标签
      _createAudio(config: Object): void {
        const audioElement = document.createElement('audio')
          // set config
        for (const [key: string, value] of Object.entries(config)) {
          if ((value !== undefined) && (value !== false)) {
            audioElement.setAttribute(key, value)
          }
        }
        this.audio = audioElement
        document.body.appendChild(audioElement)
      },
      // 添加事件监听
      _addEventHandler(): void {
        this.audio.addEventListener('play', () => {
          warn('play')
        }, false)
        this.audio.addEventListener('pause', () => {
          warn('pause')
        }, false)
        this.audio.addEventListener('ended', () => {
          warn('ended')
          if (this.isPlayingAll === true) {
            this.play(this.index + 1)
          }
        }, false)
        this.audio.addEventListener('timeupdate', () => {
          this.currentTime = this.audio.currentTime
        }, false)
      },
      // 播放
      play(index = 0) {
        if ((index > this.sources.length - 1) || (index < 0)) {
          warn(`the song's which you wanted to play is out of sources.`)
          return false
        }
        this.index = index
        this.audio.src = this.sources[this.index]
        this.audio.play()
      },
      // 暂停
      pause(): void {
        this.audio.pause()
      },
      // 继续播放
      resume(): void {
        this.audio.play()
      },
      // 播放上一曲
      playPrev(): void {
        this.play(this.index - 1)
      },
      // 播放下一曲
      playNext(): void {
        this.play(this.index + 1)
      },
      // 播放全部
      playAll(): void {
        this.play()
        this.isPlayingAll = true
      },
      // 歌曲开始播放时的回调
      start(): void {

      },
      // 歌曲结束时的回调
      end(): void {
        // if (this.) {}
      }
      // 歌曲播放时间的回调
      // 歌曲暂停时的回调
      // 歌曲重新播放时的回调
    }
  }
}

export default plugin
