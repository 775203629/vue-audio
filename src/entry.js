import Vue from 'vue'
import plugin from './index'
import 'babel-polyfill'

Vue.use(plugin)

window.Vue = Vue

new Vue({
  el: '#root',
  ready() {
    this.$audio.init({
      // autoplay: true
    }, [
      'http://music.default.kanjian.com/2014_12/110994_1418110939.mp3',
      'http://music.default.kanjian.com/2016_02/118797_fd759ddbdbdf380c506c854be3e8d6bd1455581927.mp3',
      'http://music.default.kanjian.com/2015_03/664153_1427693002.mp3'
    ])
  },
  methods: {
    play() {
      this.$audio.play()
    },
    pause() {
      this.$audio.pause()
    },
    resume() {
      this.$audio.resume()
    },
    playNext() {
      this.$audio.playNext()
    },
    playPrev() {
      this.$audio.playPrev()
    },
    playAll() {
      this.$audio.playAll()
    }
  }
})
