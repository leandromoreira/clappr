//Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var ContainerPlugin = require('../../base/container_plugin')
var Events = require('../../base/events')
var Browser = require('../../components/browser')

class ClickToPausePlugin extends ContainerPlugin {
  get name() { return 'click_to_pause' }

  constructor(options) {
    super(options)
  }

  bindEvents() {
    if (!this.options.chromeless && !Browser.isMobile) {
      this.listenTo(this.container, Events.CONTAINER_CLICK, this.click)
      this.listenTo(this.container, Events.CONTAINER_SETTINGSUPDATE, this.settingsUpdate)
    }
  }

  click() {
    if (this.container.getPlaybackType() !== 'live' || this.container.isDvrEnabled()) {
      if (this.container.isPlaying()) {
        this.container.pause()
      } else {
        this.container.play()
      }
    }
  }

  settingsUpdate() {
    this.container.$el.removeClass('pointer-enabled')
    if (this.container.getPlaybackType() !== 'live' || this.container.isDvrEnabled()) {
      this.container.$el.addClass('pointer-enabled')
    }
  }
}

module.exports = ClickToPausePlugin
