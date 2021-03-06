// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var UIObject = require('./ui_object')
var extend = require('./utils').extend

class UIContainerPlugin extends UIObject {
  constructor(options) {
    super(options)
    this.container = options.container
    this.options = options
    this.enabled = true
    this.bindEvents()
  }

  enable() {
    if (!this.enabled) {
      this.bindEvents()
      this.$el.show()
      this.enabled = true
    }
  }

  disable() {
    this.stopListening()
    this.$el.hide()
    this.enabled = false
  }

  bindEvents() {}

  destroy() {
    this.remove()
  }
}

UIContainerPlugin.extend = function(properties) {
  return extend(UIContainerPlugin, properties)
}

module.exports = UIContainerPlugin
