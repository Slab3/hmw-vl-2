'use strict'

import styles from './config/tasks/styles'
import js from './config/tasks/js'
import clean from './config/tasks/clean'
import fonts from './config/tasks/fonts'
import images from './config/tasks/images'
import watch from './config/tasks/watch'
import build from './config/tasks/build'
import differentStyles from './config/tasks/differentStyles'
import differentJs from './config/tasks/differentJs'
import different from './config/tasks/remote'

exports.styles = styles()
exports.js = js()
exports.clean = clean()
exports.fonts = fonts()
exports.images = images()
exports.watch = watch()
exports.default = build()
exports.differentStyles = differentStyles()
exports.differentJs = differentJs()
exports.remote = different()
