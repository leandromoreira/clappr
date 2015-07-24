var UIObject = require('./ui_object')
var extend = require('./utils').extend

/**
 * @class Playback
 * @constructor
 * @extends UIObject
 */

class Playback extends UIObject {
  /**
   * constructor.
   *
   * @method constructor
   * @param {Object} general options
   */
  constructor(options) {
    super(options)
    this.settings = {}
  }

  /**
   * play.
   *
   * @method play
   */
  play() {}

  pause() {}

  stop() {}

  seek(time) {}

  getDuration() { return 0 }

  isPlaying() {
    return false
  }

  getPlaybackType() {
    return 'no_op'
  }

  isHighDefinitionInUse() {
    return false
  }

  volume(value) {}

  destroy() {
    this.$el.remove()
  }
}

Playback.extend = function(properties) {
  return extend(Playback, properties)
}

Playback.canPlay = (source) => {
  return false
}

module.exports = Playback
