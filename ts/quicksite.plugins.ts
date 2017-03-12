import 'typings-global'
import * as beautylog from 'beautylog'
let bourbon = require('bourbon')
let bourbonNeat = require('bourbon-neat')
import * as handlebars from 'handlebars'
import * as highlightjs from 'highlight.js'
import * as marked from 'marked'
import * as path from 'path'
import * as smartcli from 'smartcli'
import * as smartfile from 'smartfile'
import * as smartfm from 'smartfm'
import * as smarthbs from 'smarthbs'
import * as smartpath from 'smartpath'
import * as smartsass from 'smartsass'

marked.setOptions({
  highlight: function (code) {
    return highlightjs.highlightAuto(code).value
  }
})

export {
  beautylog,
  bourbon,
  bourbonNeat,
  handlebars,
  marked,
  path,
  smartcli,
  smartfile,
  smartfm,
  smarthbs,
  smartpath,
  smartsass
}
