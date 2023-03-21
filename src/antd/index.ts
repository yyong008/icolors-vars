import path from 'node:path'

import defineVars from 'iesmo'

// colors
import colors from './colors'

// constant
import { ANTD_PREFIX } from '../utils/constants'
import { destDir } from '../utils/env'

// utils
import formatCss from '../utils/format'
import gnFile, { gnCssRootVars, gnCssVarAttrs } from '../utils/gnFile'
import { getLevelByIdx } from './colors'

const { __dirname } = defineVars(import.meta)

/**
 * 生成 css 内容
 */
function gnCSSContent() {
  const colorsKind = Object.keys(colors) // [blue, green, yellow, /*...*/]
  let cssVarsStrs = ''

  colorsKind.forEach((ck) => {
    const cKeys = colors[ck]

    cKeys.forEach((_, idx) => {
      if (colors[ck][idx].length > 6) {
        cssVarsStrs += gnCssVarAttrs(
          ANTD_PREFIX,
          colors,
          ck,
          getLevelByIdx(idx),
          idx
        )
      }
    })
  })

  return formatCss(gnCssRootVars(cssVarsStrs))
}

export default function createAntdCssFile() {
  const content = gnCSSContent()
  const targetPath = path.join(__dirname + `/../../${destDir}/antd.css`)
  gnFile(targetPath, content)
}

export function createAntdJsFile() {
  const antdColors = {}
  const colorsKind = Object.keys(colors)

  colorsKind.forEach((ck) => {
    const cKeys = colors[ck]
    antdColors[ck] = {}

    cKeys.forEach((_, idx) => {
      if (colors[ck][idx].length > 6) {
        antdColors[ck][getLevelByIdx(idx)] = colors[ck][idx]
      }
    })
  })

  const content = 'let content = ' + JSON.stringify(antdColors)
  const targetPath = path.join(__dirname + `/../../${destDir}/antd.js`)
  gnFile(targetPath, content)
}

export function createAntdColorRuntime() {
  const _colors = {}
  const colorsKind = Object.keys(colors)

  colorsKind.forEach((ck) => {
    const cKeys = colors[ck]
    _colors[ck] = {}

    cKeys.forEach((_, idx) => {
      if (colors[ck][idx].length > 6) {
        _colors[ck][getLevelByIdx(idx)] = colors[ck][idx]
      }
    })
  })

  return _colors
}
